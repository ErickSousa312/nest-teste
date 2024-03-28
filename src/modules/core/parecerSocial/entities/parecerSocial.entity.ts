import { IsNotEmpty } from 'class-validator';

export class ParecerSocial {
  //--------------------------------------------------------------------------------------------
  _id: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  IdPaciente: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  IdProcesso: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Entidade: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  TranscriParicaoMedico: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NumeroPortaria: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Justificativa: string;
}