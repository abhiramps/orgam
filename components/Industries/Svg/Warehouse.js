

const Warehouse = ({color}) => {
    return (
        <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M7.33327 0.666748C8.24993 0.666748 8.99993 1.40008 8.99993 2.33341V22.3333H23.9999C24.9165 22.3333 25.6665 23.0667 25.6665 24C25.6665 24.9167 24.9165 25.6666 23.9999 25.6666H8.99993C8.0666 25.6666 7.33327 24.9167 7.33327 24C6.39994 24 5.66661 23.25 5.66661 22.3333V4.00007H2.33329C1.39996 4.00007 0.666626 3.25007 0.666626 2.33341C0.666626 1.40008 1.39996 0.666748 2.33329 0.666748H7.33327Z" fill={color} />
            <path opacity="0.3" d="M25.6665 12.3334C25.6665 8.6515 22.6818 5.66675 18.9999 5.66675C15.318 5.66675 12.3333 8.6515 12.3333 12.3334C12.3333 16.0153 15.318 19 18.9999 19C22.6818 19 25.6665 16.0153 25.6665 12.3334Z" fill="#7767E4" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33326 19C6.00719 19 4.73542 19.5268 3.79774 20.4645C2.86006 21.4021 2.33328 22.6739 2.33328 24C2.33328 25.3261 2.86006 26.5978 3.79774 27.5355C4.73542 28.4732 6.00719 29 7.33326 29C8.65934 29 9.9311 28.4732 10.8688 27.5355C11.8065 26.5978 12.3332 25.3261 12.3332 24C12.3332 22.6739 11.8065 21.4021 10.8688 20.4645C9.9311 19.5268 8.65934 19 7.33326 19Z" fill={color} />
        </svg>

    )
}

export default Warehouse