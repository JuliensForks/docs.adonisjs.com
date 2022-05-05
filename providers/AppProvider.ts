import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public test() {
    console.log('hello')

    console.log('hello 2')
  }

  public register() {
    this.test()
  }

  public async boot() {
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
