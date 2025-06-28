import './styles/viewmore.css'

const ViewMore = ({clr}) => {
    return (
        <button className="viewmore" style={{color: clr, borderColor: (clr == 'black') ? 'grey' : 'white'}}>View More <span>»</span> </button>
    )
}

export default ViewMore;