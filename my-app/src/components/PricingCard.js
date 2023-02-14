import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Front-End -</h3>
                <span className="bar"></span>
                <p className="btc">$1000</p>
                <p>- 3 Mесеци -</p>
                <p>- 30ч Неделно -</p>
                <p>- Физички -</p>
                <p>- On-line -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>

            </div>
            <div className="card">
                <h3>- Back-End -</h3>
                <span className="bar"></span>
                <p className="btc">$1200</p>
                <p>- 4 Mесеци -</p>
                <p>- 30ч Неделно -</p>
                <p>- Физички -</p>
                <p>- On-line -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>

            </div>
            <div className="card">
                <h3>- Full-Stack -</h3>
                <span className="bar"></span>
                <p className="btc">$2000</p>
                <p>- 8 Mесеци -</p>
                <p>- 30ч Неделно -</p>
                <p>- Физички -</p>
                <p>- On-line -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>

            </div>
            <div className="card">
                <h3>- Dev-Ops -</h3>
                <span className="bar"></span>
                <p className="btc">$1800</p>
                <p>- 6 Mесеци -</p>
                <p>- 30ч Неделно -</p>
                <p>- Физички -</p>
                <p>- On-line -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>

            </div>
        </div>
    </div>
  )
}

export default PricingCard