import Menu1 from 'assets/hamburguer-price1.png'
import Menu2 from 'assets/hamburguer-price2.png'
import Menu3 from 'assets/hamburguer-price3.png'


interface SpecialMenu {
    title: string,
    subtitle: string,
    onlyToday: boolean
}
// Example array component
// const SpecialMenus = [
//     {
//         title: 'BURGUER IMPERIAL + BATATA',
//         weight: '250kg',
//         onlyToday: true
//     },
//     {
//         title: 'BATATA',
//         weight: '150kg',
//         onlyToday: false
//     },
//     {
//         title: 'SORVETE',
//         weight: '50kg',
//         onlyToday: false
//     }
// ]

export const SpecialMenu = () => {

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '10px',
        }}>
            <div style={{
                gridRow: 'span 2',
            }}>
                <img src={Menu1} alt="" />
            </div>
            <div >
                <img src={Menu2} alt="" />
            </div>
            <div >
                <img src={Menu3} alt="" />
            </div>
        </div>
    )

}