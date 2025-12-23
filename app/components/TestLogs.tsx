"use client";

export default function Dashboard() {
    const handleClick = () => {
        console.log("Dashboard Clicked");
    };

    return (
        <button onClick={handleClick}>
            Dashboard
        </button>
    );
}