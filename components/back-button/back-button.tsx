import { useRouter } from 'next/router'

const BackButton = () =>{
    
    const router = useRouter()
    return (
        <button className="btn btn-dashboard-back btn-radius" onClick={() => router.back()}>Back</button>
    )
}

export default BackButton;