import { SupabaseException } from "../exceptions/SupabaseException";
import supabase from "../infra/supabase";

export type ConfirmationData = {
  name: string;
  email: string
}

class ConfirmationService {
  async confirm(data: ConfirmationData) {
    try {
      await supabase.from('guests').insert(data)
    } catch (error) {
      console.error(error)
      throw new SupabaseException('Falha ao salvar confirmação!')
    }
  }
}

const confirmationService = new ConfirmationService()

export default confirmationService