import { $fetch } from 'ohmyfetch'

class IBGEImp {
  #service = $fetch.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v2/censos/nomes'
  })

  getPopularNames(): Promise<any> {
    return this.#service('')
  }

  getName(resource: string): Promise<any> {
    return this.#service(`/${resource}`)
  }
}

export const IBGE = new IBGEImp()
