// import React from "react";

// const AdminDashboard = () => {
//   const showHeader = () => (
//     <div className="bg-dark text-white py-4">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <h1>
//               <i className="fas fa-home"> dashboard</i>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   const showActionBtns = () => (
//     <div className="bd-light my-2">
//       <div className="container">
//         <div className="row pb-3">
//           <div className="col-md-4  my-1">
//             <button className="btn btn-outline-info btn-block">
//               <i className="fas fa-plus"> Add catagory</i>
//             </button>
//           </div>

//           <div className="col-md-4  my-1">
//             <button className="btn btn-outline-warning btn-block">
//               <i className="fas fa-plus"> Add food</i>
//             </button>
//           </div>

//           <div className="col-md-4  my-1">
//             <button className="btn btn-outline-success btn-block">
//               <i className="fas fa-plus"> view order</i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   return (
//     <section>
//       {showHeader()}
//       {showActionBtns()}
//     </section>
//   );
// };

// export default AdminDashboard;

// // import React, { useEffect } from "react";
// // // components
// // import AdminHeader from "./AdminHeader";
// // import AdminActionBtns from "./AdminActionBtns";
// // import AdminCategoryModal from "./AdminCategoryModal";
// // import AdminProductModal from "./AdminProductModal";
// // import AdminBody from "./AdminBody";
// // // redux
// // import { useDispatch } from "react-redux";
// // import { getCategories } from "../redux/actions/categoryActions";
// // import { getProducts } from "../redux/actions/productActions";

// // const AdminDashboard = () => {
// //   const dispatch = useDispatch();
// //   useEffect(() => {
// //     dispatch(getCategories());
// //   }, [dispatch]);
// //   useEffect(() => {
// //     dispatch(getProducts());
// //   }, [dispatch]);

// //   return (
// //     <section>
// //       <AdminHeader />
// //       <AdminActionBtns />
// //       <AdminCategoryModal />
// //       <AdminProductModal />
// //       <AdminBody />
// //     </section>
// //   );
// // };

// // export default AdminDashboard;
