import react from 'react';

// SSR
export async function getServerSideProps(){
    return {
        props: {
            ssrData: 10
        }
    }
}


// ▶ http://localhost:3000/sub
export default ({ssrData})=> {
    return <div>
        <h2>{ssrData}</h2>
        <h1>Hello</h1>
    </div>
}