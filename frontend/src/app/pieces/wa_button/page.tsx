'use client';

import Image from 'next/image';

export default function WhatsappButtonWithMessage() {
    const phoneNumber = '5511987079154'; // Substitua pelo número de telefone com código do país e e DDD
    const message = 'Olá! Gostaria de mais informações sobre seus serviços.'; // Mensagem pré-definida

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            aria-label="Fale Conosco pelo WhatsApp"
            type="button"
        >
            <div className="w-6 h-6 inline-block" aria-hidden="true">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
            </div>
            <span>Fale Conosco pelo WhatsApp</span>
        </button>
    );
}
