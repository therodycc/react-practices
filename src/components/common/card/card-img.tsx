import Link from 'next/link'
import React, { FC } from 'react'

interface CardImagePropsI {
    image: string
    title: string
    route: string
}

const CardImage: FC<CardImagePropsI> = ({ image, title, route }) => {
    return (
        <React.Fragment>
            <Link href={route}>
                <div className="col-xl-3 p-3 m-0 py-1">
                    <div className="rounded card-dashboard row justify-content-center align-items-center"
                        style={{ height: '180px' }}>
                        <img
                            className="p-0 m-0"
                            src={image || "https://cdn-icons-png.flaticon.com/512/7444/7444339.png"}
                            alt=""
                            style={{
                                width: "70px",
                            }}
                        />
                        <p className="fw-bolder text-center my-0 py-0">
                            {title}
                        </p>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default CardImage