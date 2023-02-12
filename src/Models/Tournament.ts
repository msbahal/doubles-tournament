import { Syncable } from '@interfaces/sync';
import Leaderboard from '@controllers/Leaderboard';
import MatchController from '@controllers/MatchController';
import PlayersController from '@controllers/PlayersController';
import TeamsController from '@controllers/TeamsController';
import { WINS } from '@interfaces/constants';
import {
  DESCENDING,
  isAscending,
  ITournament,
  ParticipantParams,
  ScheduleInfo,
  TournamentParams,
} from '@interfaces/interfaces';
import Match from '@models/Match';
import { defaultTournamentValues } from '@utils/constants';
import { uuid } from '@utils/uuid';

const {
  defaultName,
  defaultPrice,
  defaultLocation,
  defaultDate,
  defaultMaxNumberOfPlayers,
} = defaultTournamentValues;

export default abstract class Tournament<
  T extends PlayersController | TeamsController
> implements ITournament {
  public id: string;
  public name: string;
  public date: Date;
  public price: number;
  public maxNumberOfPlayers: number;
  public location: string;
  protected params?: TournamentParams;
  protected participants: T;
  protected tournamentScheduler: (...participants: any[]) => ScheduleInfo;
  protected _schedule: ScheduleInfo = {
    rawSchedule: [],
    schedule: [],
    matches: {},
  };

  constructor(
    participants: T,
    tournamentScheduler: (...participants: any[]) => ScheduleInfo,
    params?: TournamentParams,
  ) {
    this.id = uuid();
    this.name = params?.name || defaultName;
    this.date = params?.date || defaultDate;
    this.price = params?.price || defaultPrice;
    this.maxNumberOfPlayers =
      params?.maxNumberOfPlayers || defaultMaxNumberOfPlayers;
    this.location = params?.location || defaultLocation;
    this.participants = participants;
    this.tournamentScheduler = tournamentScheduler;
  }

  abstract get schedule(): Match[][];

  public newSchedule(): Match[][] {
    if (this._schedule.schedule.length > 0) {
      throw new Error(`
        There is an ongoing tournament.
        If you want to restart the tournament
        with same players use resetTournament
      `);
    }

    return this.createSchedule();
  }

  public resetSchedule(): Match[][] {
    return this.createSchedule();
  }

  private createSchedule(): Match[][] {
    this._schedule = this.tournamentScheduler(this.participants.participants);

    return this._schedule.schedule;
  }

  public addResults(matchId: string, results: number[][]): void {
    MatchController.update(this._schedule.matches, matchId, results);
  }

  public get info() {
    return {
      name: this.name,
      price: this.price,
      date: this.date,
      maxNumberOfPlayers: this.maxNumberOfPlayers,
      location: this.location,
    };
  }

  public leaderboard(
    sortable?: keyof ParticipantParams,
    ascending?: isAscending,
  ) {
    const participants = this.participants.participants;

    if (!sortable) {
      // provide default sortable key
      return Leaderboard.sortBy.call(this, participants, WINS, DESCENDING);
    } else if (!ascending) {
      return Leaderboard.sortBy.call(this, participants, sortable, DESCENDING);
    }

    return Leaderboard.sortBy.call(this, participants, sortable, ascending);
  }

  public import(data: Syncable): TournamentParams {
    return {} as TournamentParams;
  }

  public export(): Syncable {
    return {} as Syncable;
  }
}
