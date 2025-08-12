import { useState } from "react";

export default function App() {
    const [to, setTo] = useState("+919341261243"); // user phone
    const [message, setMessage] = useState("Your order is confirmed. Thank you!");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const sendSMS = async () => {
        setLoading(true);
        setResult(null);

        try {
            const res = await fetch("http://localhost:5000/send-sms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ to, message })
            });
            const data = await res.json();
            setResult({ status: res.status, data });
        } catch (err) {
            setResult({ status: "error", error: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 520, margin: "40px auto", padding: 20, borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>
            <h2>Send SMS (click button)</h2>

            <label style={{ display: "block", marginTop: 12 }}>Phone (E.164):</label>
            <input hidden value={to} onChange={e => setTo(e.target.value)} style={{ width: "100%", padding: 8, marginTop: 6 }} />

            <label style={{ display: "block", marginTop: 12 }}>Message:</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} style={{ width: "100%", padding: 8, marginTop: 6 }} />

            <button onClick={sendSMS} disabled={loading} style={{ marginTop: 12, padding: "10px 16px" }}>
                {loading ? "Sending..." : "Send SMS"}
            </button>

            <div style={{ marginTop: 16 }}>
                <pre style={{ background: "#f6f8fa", padding: 12, borderRadius: 6 }}>
                    {result ? JSON.stringify(result, null, 2) : "Result will appear here"}
                </pre>
            </div>
        </div>
    );
}
