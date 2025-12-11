import { AiOutlineShoppingCart, AiTwotoneDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoMdChatboxes } from "react-icons/io";
import { FaUserFriends, FaUserTimes } from "react-icons/fa";
import { FaCodePullRequest, FaMoneyBill1Wave } from "react-icons/fa6";
import { IoBagAddSharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { RiChatSmile2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";


export const allNav = [
    {
        id : 1,
        title : 'Dashboard', 
        icon : <AiTwotoneDashboard />,
        role : 'admin',
        path : '/admin/dashboard'
    },
    {
        id : 2,
        title : 'Orders', 
        icon : <AiOutlineShoppingCart />,
        role : 'admin',
        path : '/admin/dashboard/orders'
    },
    {
        id : 3,
        title : 'Category', 
        icon : <BiCategory/>,
        role : 'admin',
        path : '/admin/dashboard/category'
    },
    {
        id : 4,
        title : 'Sellers', 
        icon : <FaUserFriends />,
        role : 'admin',
        path : '/admin/dashboard/sellers'
    },
    {
        id : 5,
        title : 'Payment Request', 
        icon : <FaMoneyBill1Wave />,
        role : 'admin',
        path : '/admin/dashboard/payment-request'
    },
    {
        id : 6,
        title : 'Deactive Sellers', 
        icon : <FaUserTimes />,
        role : 'admin',
        path : '/admin/dashboard/deactive-sellers'
    },
    
    {
        id : 7,
        title : 'Seller Request', 
        icon : <FaCodePullRequest />,
        role : 'admin',
        path : '/admin/dashboard/seller-request'
    },
    {
        id : 8,
        title : 'Live Chat', 
        icon : <IoMdChatboxes />,
        role : 'admin',
        path : '/admin/dashboard/chat-seller'
    },
    {
        id : 9,
        title : 'Dashboard', 
        icon : <AiTwotoneDashboard />,
        role : 'seller',
        path : '/seller/dashboard'
    },
    {
        id : 10,
        title : 'Add Product', 
        icon : <IoBagAddSharp />,
        role : 'seller',
        path : '/seller/dashboard/add-product'
    },
    {
        id : 11,
        title : 'All Product', 
        icon : <FaClipboardList />,
        role : 'seller',
        path : '/seller/dashboard/products'
    },
    {
        id : 12,
        title : 'Discount Product', 
        icon : <MdDiscount />,
        role : 'seller',
        path : '/seller/dashboard/discount-product'
    },
    {
        id : 13,
        title : 'Orders', 
        icon : <BsCartCheckFill />,
        role : 'seller',
        path : '/seller/dashboard/orders'
    },
    {
        id : 14,
        title : 'Payments', 
        icon : <MdPayments />,
        role : 'seller',
        path : '/seller/dashboard/payments'
    },
    {
        id : 15,
        title : 'Chat-Customer', 
        icon : <IoMdChatboxes />,
        role : 'seller',
        path : '/seller/dashboard/chat-customer'
    },
    {
        id : 16,
        title : 'Chat-Support', 
        icon : <RiChatSmile2Fill />,
        role : 'seller',
        path : '/seller/dashboard/chat-support'
    },
    {
        id : 17,
        title : 'Profile', 
        icon : <FaUserCircle />,
        role : 'seller',
        path : '/seller/dashboard/profile'
    }
    
    
    
]

