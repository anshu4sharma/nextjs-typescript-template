import React, { FC } from 'react'
const Container: FC<Props> = ({ children }) => {
    return (
        <div
            className={"container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg"}>
            {children}
        </div>
    )
}

export default Container

