'use client';

export default function WhatsappButtonWithMessage() {
    const phoneNumber = '5511987079154'; // Substitua pelo número de telefone com código do país e e DDD
    const message = 'Olá! Gostaria de mais informações sobre seus serviços.'; // Mensagem pré-definida

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <button onClick={handleClick}>
            Fale Conosco pelo WhatsApp
        </button>
    );
}
