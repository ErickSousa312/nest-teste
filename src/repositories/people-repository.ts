export abstract class peopleRepository {
  abstract create(name: string, teamName: string): Promise<void>;
}
