export interface RecentTransaction{
    image: string;
    name: string;
    amount: number;
    difference: "increment" | "decrement";
    date: string;
}