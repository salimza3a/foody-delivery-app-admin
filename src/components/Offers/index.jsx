import "./offer-style.css";
import MainDrawer from "../../features/Drawer";
import OffersDrawer from "../../features/OffersDrawer";
import OffersTable from "./OfferTable";
import { useEffect } from "react";
import { deleteOffersApi, getOffersApi } from "../../api/offers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

import { setOfferData } from "../../store/slice/offerSlice";
function OfferPage() {
  const offerState = useSelector((state) => state.offer.offerData);
  const dispatch = useDispatch();

  useEffect(() => {
    getOffers();
  }, []);

  function getOffers() {
    getOffersApi.then((res) => dispatch(setOfferData([...res.data.offers])));
  }

  function deleteTableValue(id) {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "Attention! If you delete this product, it won't come back...",
      showCancelButton: true,
      confirmButtonColor: "#d63626",
      cancelButtonColor: "#BDBDBD",
      confirmButtonText: "delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOffersApi(id).then((res) => {
          const newArr = offerState.filter((item) => item.id !== id);
          dispatch(setOfferData(newArr));
        });
        toast.success("deleted successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
        });
      }
    });
  }

  return (
    <>
      <div className="offers-container">
        <div className="offers-header">
          <h2>Offers</h2>
          <span className="offer-btn">
            {<MainDrawer name="Add Offer" drawer={<OffersDrawer />} />}
          </span>
        </div>

        <div className="offers-main">
          <OffersTable data={offerState} deleteValue={deleteTableValue} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default OfferPage;
