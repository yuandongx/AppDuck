export interface FinaNote {
    Id: number; //序号
    BusinessDepartment: string; //部门
    CompanyName: string; // 企业名称
    InvoiceType: string; // 开票种类
    InvoiceDate: string; //开票日期
    InvoiceAmount: number; // 开票金额
    DiffBetweenAmount: number//差额
    ServiceChange: number; // 手续费
    PaymentDate: string;//对方付款日期
    PaymentAmount: number;//对方付款金额
    PaymentDateOfLabor: string; // 支付劳务费日期
    PaymentDateOfAmount: number; // 支付劳务费金额
    NoteDate?: string; // 记录日期
    NoteMonth?: string;//记账年月
    Comment: string; // 备注 重要
}