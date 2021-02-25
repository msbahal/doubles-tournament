import Tournament from '@models/Tournament';
import { ITournament, TournamentParams } from '@interfaces/interfaces';
import TeamsHandler from '@controllers/TeamsController';

export default class FixedTeamsTournament
  extends Tournament<TeamsHandler>
  implements ITournament {
  protected participants = new TeamsHandler();

  constructor(params?: TournamentParams) {
    super(params);
  }

  public teams = this.participants.teams;
  public addTeam = this.participants.addTeam;
  public addTeams = this.participants.addTeams;

  public schedule() {}
  public newSchedule() {}
  public resetSchedule() {}
}
