import { Injectable } from '@nestjs/common';
import { RepoService } from 'core/shared/service/repo.service';

@Injectable()
export class LawyerTeamService {
  constructor(public repos: RepoService){

  }

  async signUpLawyer(data: SignUpLawyerDto): Promise<Tokens> {
    const hashResult = await argon.hash(data.password);

    const existUser = await this.repos.user.findOneBy({ email: data.email });

    if (existUser)
      throw new ForbiddenException(
        'Lawyer already Exsist with the ' + data.email,
      );
// searialization
    const courts = await this.repos.court.findBy({
      id: In([...data.courtIds]),
    });
    const specialization = await this.repos.specialization.findOneBy({
      id: data.specializationId,
    });
    console.log(courts);

    const lawyerResult: Lawyer = {
      specialization,
      court: courts,
      user,
    };
    console.log({ lawyerResult });

    const lawyer = this.repos.lawyer.create({ ...lawyerResult });
    await this.repos.lawyer.save(lawyer).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });

    return this.returnGeneratedToken(lawyer.user);
  }

  findAll() {
    return `This action returns all lawyerTeam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lawyerTeam`;
  }

  update(id: number, data) {
    return `This action updates a #${id} lawyerTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawyerTeam`;
  }
}
