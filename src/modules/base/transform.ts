import { SZ, SH, HK, US } from "../../utils/constant";

/**
 * 基础股票代码转换
 */
class BaseTransform {
  /**
   * 构造函数
   */
  constructor() {}

  /**
   * 深交所股票代码转换
   * @param code 股票代码
   */
  public SZExchangeTransform(code: string): string {
    if (!code.includes(SZ)) {
      throw new Error("请检查股票代码是否正确");
    }

    throw new Error("未实现深交所股票代码转换");
  }

  /**
   * 上交所股票代码转换
   * @param code 股票代码
   */
  public SHExchangeTransform(code: string): string {
    if (!code.includes(SH)) {
      throw new Error("请检查股票代码是否正确");
    }

    throw new Error("未实现上交所股票代码转换");
  }

  /**
   * 港交所股票代码转换
   * @param code 股票代码
   */
  public HKExchangeTransform(code: string): string {
    if (!code.includes(HK)) {
      throw new Error("请检查股票代码是否正确");
    }

    throw new Error("未实现港交所股票代码转换");
  }

  /**
   * 美交所股票代码转换
   * @param code 股票代码
   */
  public USExchangeTransform(code: string): string {
    if (!code.includes(US)) {
      throw new Error("请检查股票代码是否正确");
    }

    throw new Error("未实现美交所股票代码转换");
  }
}

export default BaseTransform;