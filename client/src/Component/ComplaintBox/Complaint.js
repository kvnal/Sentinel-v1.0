const Complaint = ({complaintData= null}) => {
    return ( 
        <div>
            <div>
                <div>
                    <input type="text" placeholder="Your Complaint" />
                    <button>submit</button>
                </div>
            </div>
            {
                complaintData &&

                <div>
                    <span>All Complaints</span>
                    {complaintData.map(element => (
                        <div>
                            {element}
                        </div> 
                    ))}
                </div>
            }
        </div>
     );
}
 
export default Complaint;