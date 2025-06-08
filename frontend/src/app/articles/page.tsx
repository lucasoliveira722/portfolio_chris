"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleType } from "@/interfaces/articles";
import Header from "../pieces/header/page";

export default function ObjectsPage() {
    const [objects, setObjects] = useState<ArticleType[]>([]);

    useEffect(() => {
        async function fetchObjects() {
            const resposta = await fetch("http://localhost:4000/api/objects");
            const data = await resposta.json();
            setObjects(data);
        }
        fetchObjects();
    }, []);

    return (
        <div className="container mx-auto p-8">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objects.map((article) => (
                    <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 w-full">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-3 text-gray-800">{article.title}</h2>
                            <p className="text-gray-600 mb-4">{article.description}</p>
                            <Link 
                                href={`/objects/${article.id}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                            >
                                Read More
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
  