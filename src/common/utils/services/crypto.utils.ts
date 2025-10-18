import * as bcrypt from 'bcryptjs';

export class CryptoUtils {
  static async hash(input: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(input, salt);
  }
  static async isMatch(input: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(input, hash);
  }
}
