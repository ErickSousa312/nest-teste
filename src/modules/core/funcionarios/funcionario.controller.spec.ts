import { Test, TestingModule } from "@nestjs/testing";
import { FuncionarioController } from "./funcionario.controller";
import { FuncionarioService } from "./shared/funcionario.service";
import { AuthGuard } from "../auth/auth.guard";
import { CanActivate } from "@nestjs/common";

describe("FuncionarioController", () => {
  let funcionarioController: FuncionarioController;
  let funcionarioService: FuncionarioService;

  beforeEach(async () => {
    const mock_ForceFailGuard: CanActivate = {
      canActivate: jest.fn(() => true),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [FuncionarioController],
      providers: [
        {
          provide: FuncionarioService,
          useValue: {
            create: jest.fn(),
            getAllFuncionario: jest.fn(),
          },
        },
      ],
    })
      .overrideGuard(AuthGuard)
      .useValue(mock_ForceFailGuard)
      .compile();

    funcionarioController = app.get<FuncionarioController>(
      FuncionarioController,
    );
    funcionarioService = app.get<FuncionarioService>(FuncionarioService);
  });

  it("should be defined", () => {
    expect(funcionarioController).toBeDefined();
    expect(funcionarioService).toBeDefined();
  });
});
