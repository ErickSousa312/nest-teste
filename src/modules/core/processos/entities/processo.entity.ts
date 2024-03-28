import { IsNotEmpty } from 'class-validator';
export class Processo {
  _id: string;
  @IsNotEmpty({
    message: 'O campo IdPaciente não pode estar vazio',
  })
  IdPaciente: number;
  @IsNotEmpty({
    message: 'O campo DataViagem não pode estar vazio',
  })
  DataViagem: Date;
  @IsNotEmpty({
    message: 'O campo DataAgendamento não pode estar vazio',
  })
  DataAgendamento: Date;
  @IsNotEmpty({
    message: 'O campo PrevisaoRetorno não pode estar vazio',
  })
  PrevisaoRetorno: Date;
  @IsNotEmpty({
    message: 'O campo TipoAtendimento não pode estar vazio',
  })
  TipoAtendimento: number;
  @IsNotEmpty({
    message: 'O campo Especialidade não pode estar vazio',
  })
  Especialidade: number;
  @IsNotEmpty({
    message: 'O campo IdFuncionario não pode estar vazio',
  })
  IdFuncionario: number;
  @IsNotEmpty({
    message: 'O campo IdMedico não pode estar vazio',
  })
  IdMedico: number;
  @IsNotEmpty({
    message: 'O campo Entidade não pode estar vazio',
  })
  Entidade: number;
  @IsNotEmpty({
    message: 'O campo LocalOrigem não pode estar vazio',
  })
  LocalOrigem: string;
  @IsNotEmpty({
    message: 'O campo LocalAtendimento não pode estar vazio',
  })
  LocalAtendimento: string;
  @IsNotEmpty({
    message: 'O campo Destino não pode estar vazio',
  })
  Destino: string;
  @IsNotEmpty({
    message: 'O campo TipoDeslocamento não pode estar vazio',
  })
  TipoDeslocamento: string;
  @IsNotEmpty({
    message: 'O campo EmpresaTransporte não pode estar vazio',
  })
  EmpresaTransporte: string;
  @IsNotEmpty({
    message: 'O campo TotalPassagem não pode estar vazio',
  })
  TotalPassagem: {
    ida: number;
    volta: number;
  };
  @IsNotEmpty({
    message: 'O campo IdentTrajeto não pode estar vazio',
  })
  IdentTrajeto: string;
  @IsNotEmpty({
    message: 'O campo ObsAtendimento não pode estar vazio',
  })
  ObsAtendimento: string;
  @IsNotEmpty({
    message: 'O campo ObsPassagemAerea não pode estar vazio',
  })
  ObsPassagemAerea: string;
}
