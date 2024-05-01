import { RecentTransaction } from "src/app/shared/models/recent-transaction.interface";

export const RECENT_TRANSACTION: RecentTransaction[] = [
    {
        image: 'assets/images/person1.svg',
        name: 'Jacob Thomas',
        amount: 120,
        difference: "increment",
        date: '20 Nov 2022, 10:00 AM'
    },
    {
        image: 'assets/images/person2.svg',
        name: 'Christina Mathew',
        amount: 16,
        difference: "decrement",
        date: '19 Nov 2022, 10:00 AM'
    },
    {
        image: 'assets/images/person3.svg',
        name: 'Catherine John',
        amount: 24,
        difference: "increment",
        date: '19 Nov 2022, 09:55 AM'
    },
    {
        image: 'assets/images/person4.svg',
        name: 'Aleena Fernandez',
        amount: 32,
        difference: "decrement",
        date: '19 Nov 2022, 09:45 AM'
    },
    {
        image: 'assets/images/person5.svg',
        name: 'John Samuel',
        amount: 40,
        difference: "increment",
        date: '19 Nov 2022, 09:30 AM'
    }
]