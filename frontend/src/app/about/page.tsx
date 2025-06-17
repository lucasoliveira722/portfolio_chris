import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="flex items-center gap-6 p-8">
            <Image
                src="/chris.jpeg"
                alt="Chris"
                width={150}
                height={150}
                className="rounded-full"
            />
            <div>
                <h1 className="text-xl font-bold">
                    Essa página é da Chris, a especialista de SEO e Copywriting mais foda da galáxia
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, ut corrupti fugiat molestiae quod dignissimos explicabo debitis consequuntur impedit libero quidem expedita et sunt necessitatibus beatae exercitationem iste atque quas?
                </p>
            </div>
        </div>
    );
}

/* 

*/