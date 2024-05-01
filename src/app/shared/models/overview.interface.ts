export interface Overview{
    title: string;
    amount: number;
    change: number;
    difference: "increment" | "decrement";
    cashFlow: "positive" | "negative"
}