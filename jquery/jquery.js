const rate = 70;

$('.currency-btn').on('click', function () {
    $('.currency-btn').removeClass('active');
    $(this).addClass('active');
    const currency = $(this).data('currency');
    const pricingCard = $(this).closest('.pricing-card'); 
    pricingCard.find('.pricing-card__price, .pricing-card__price-old').each(function () {
        const rub = $(this).data('rub');
        if (currency === 'usd') {
            const usd = Math.round(rub / rate);
            $(this).text(`$${usd}`);
        } else {
            $(this).text(
                rub.toLocaleString('ru-RU') + ' ₽'
            );
        }
    });
});
