import { makeAutoObservable, reaction, runInAction } from 'mobx';

type page = string;

async function testFetch(page: number) {
    await new Promise((resolve)=>{ setTimeout(resolve,300) });
    return Array.from({length:10}).map((v,index)=>`${page * 10 + index}번`);
}

class Page {
    page: number;
    pageData: page[];

    constructor() {
        this.page = 1;
        this.pageData = [];
        makeAutoObservable(this);

        reaction(()=>this.page, async (now, prev)=>{
            const pages = await testFetch(now);
            runInAction(()=>{
                this.pageData = pages;
            })
        });
    }

    nextPage() {
        this.page += 1;
    }
    prevPage() {
        this.page -= 1;
    }
}

export default Page;