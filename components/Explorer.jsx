import Image from "next/image"
import Link from "next/link"


function Explorer(){
    
    return(
        <>
            <div class="flex space-x-4">
                <div>
                    <Image src="/asset/images/cacao-6554305_1280.jpg" width={400} height={500}/>
                    <div>
                        <p>Prix :</p>
                        <Link href="#"><button class="bg-green-500 rounded-md p-2">vendre</button></Link>
                    </div>
                </div>
                <div>
                    <Image src="/asset/images/banana.jpg" width={400} height={500}/>
                    <div>                    
                        <p>Prix :</p>
                        <Link href="#"><button class="bg-green-500 rounded-md p-2">vendre</button></Link>
                    </div>
                </div>
                <div>
                    <Image src="/asset/images/cabbage.jpg" width={400} height={500}/>
                    <div>
                        <p>Prix :</p>
                        <Link href="#"><button class="bg-green-500 rounded-md p-2">vendre</button></Link>
                    </div>
                </div>
                <div>
                    <Image src="/asset/images/corn.jpg" width={400} height={500}/>
                    <p>Prix :</p>
                    <Link href="#"><button class="bg-green-500 rounded-md p-2">vendre</button></Link>
                </div>
                <div>
                    <Image src="/asset/images/potatoes.jpg" width={400} height={500}/>
                    <p>Prix :</p>
                    <Link href="#"><button class="bg-green-500 rounded-md p-2">vendre</button></Link>
                </div>
                <div>
                    <Image src="/asset/images/farming.jpg" width={400} height={500}/>
                    <p>Prix :</p>
                    <Link href="#"><button class="bg-green-500 rounded-md p-2">vendre</button></Link>
                </div>
                <div>
                    <Image src="/asset/images/tomatoes.jpg" width={400} height={500}/>
                    <p>Prix :</p>
                    <Link href="#"><button class="bg-green-500 rounded-md p-2">vendre</button></Link>
                </div>
                <div>
                    <Image src="/asset/images/watermelon.jpg" width={400} height={500}/>
                    <p>Prix :</p>
                    <Link href="#"><button class="bg-green-500 rounded-md p-2">vendre</button></Link>
                </div>
            </div>
        
        </>
    )
}

export default Explorer