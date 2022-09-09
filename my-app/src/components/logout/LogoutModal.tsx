import Modal from 'react-modal';
import profilePic from '../../assets/profile-holder.svg';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '290px',
      width: '440px',
      borderRadius: '3px',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.05)',
    },
  };

function LogoutModal (){

    return(
        <div>
            <Modal
            isOpen={true}
            style={customStyles}
            >
                <div>
                    <img src={profilePic}></img>
                </div>
            </Modal>    
        </div>
    );
}
export default LogoutModal;