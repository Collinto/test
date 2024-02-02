import style from "./pricingCard.module.css"

export default function PricingCard({
    label,
    pricelabel,
    duration, 
    image,
    imgA,
})
    {
        return(
            <div className={style.card}>
                <div className={style.cardWrapper}>
                <span className={style.cardLabel}>{label}</span>
                <div className={style.cardImage}>
                <img src={image} alt={imgA}/>
            </div>
            <div className={style.cardPrice}>
                <span className={style.cardPriceLabel}>{pricelabel}</span>
                 <span className={style.cardDuration}>{duration}</span>
            </div>
                <>
                <span className={style.cardBenefitsLabel}>Everything in free, plus:</span>
                <ul className={style.cardBenefits}>
                    <li className={style.cardBenefit}>Upto 10 Users</li>
                    <li className={style.cardBenefit}>Email and Call support</li>
                    <li className={style.cardBenefit}>One year access </li>
                </ul>
                </>
                <button className={style.cardButton}>CHOOSE</button>
                </div>
            </div>
            )
    }