import { Controller } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
import { Get, Body, UseGuards, Post } from "@nestjs/common";
import { ParecerSocialService } from "./shared/parecerSocial.service";
import { ParecerSocialDto } from "./dto/parecerSocial.dto";

@Controller("socialOpinion")
export class ParecerSocialController {
  constructor(private readonly parecerSocialService: ParecerSocialService) {}
  @UseGuards(AuthGuard)
  @Post("create")
  create(@Body() parecerSocial: ParecerSocialDto): Promise<ParecerSocialDto> {
    return this.parecerSocialService.create(parecerSocial);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllParecerSocial(): Promise<ParecerSocialDto[]> {
    return this.parecerSocialService.GetAllPaciente();
  }
}
