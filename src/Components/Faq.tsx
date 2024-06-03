import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "./Footer";
import Navbar from "./Navbar";

const FaqList = [
  {
    id: 1,
    question: "Are my personal details safe with you?",
    answer:
      "We take customer privacy and data security seriously. Your personal information is encrypted and stored securely according to industry standards. We never sell or share your information with third parties.",
  },
  {
    id: 2,
    question: "How secure is the payment process on your website?",
    answer:
      "We utilize industry-standard encryption protocols to ensure that your payment information is secure during transactions.",
  },
  {
    id: 3,
    question: "Can I track my order?",
    answer:
      "Yes, once your order has been shipped, you will receive a tracking number via email, which you can use to track the status of your delivery.",
  },
  {
    id: 4,
    question: "What if I receive a damaged or incorrect item?",
    answer:
      "If you receive a damaged or incorrect item, please contact our customer service team within a reasonable timeframe, and we will assist you with the return or replacement process.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and sometimes alternative payment methods like Apple Pay or Google Pay, PhonePe, Paytm, AmazonPay,RazorPay.",
  },
  {
    id: 6,
    question: "What is our return policy?",
    answer:
      "Our return policy typically allows for returns within a certain timeframe after purchase. Please refer to our Returns & Exchanges page for detailed information.",
  },
  {
    id: 7,
    question: "How long will it take for my order to arrive?",
    answer:
      "Delivery times vary depending on your location and the shipping method chosen. You can find estimated delivery times during checkout.",
  },
  {
    id: 8,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination.",
  },
  {
    id: 9,
    question: "Do you offer gift wrapping or personalized messages?",
    answer:
      "Yes, we offer gift wrapping services and the option to include personalized messages for certain items. This option is available during the checkout process.",
  },
  {
    id: 10,
    question: "What if I have additional questions or need further assistance?",
    answer:
      "If you have any other questions or need assistance with your order, please don't hesitate to contact our customer service team. You can reach us via email, phone, or live chat during business hours. We're here to help!",
  },
];

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState<{ [key: number]: boolean }>({});

  const toggleAnswer = (id: number) => {
    setShowAnswer((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // console.log("answer", showAnswer);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-40">
        <h1 className="font-bold text-center mb-10 text-2xl">
          Ordering with E-commerce - FAQ
        </h1>
        {FaqList.map(({ id, question, answer }) => (
          <div
            key={id}
            className="border border-gray-400 rounded-lg  bg-white mb-10"
          >
            <article className="flex items-center justify-between p-4 lg:p-6">
              <h2
                className="cursor-pointer text-lg font-semibold mb-2 text-gray-700"
                onClick={() => toggleAnswer(id)}
              >
                {question}
              </h2>

              <ul>
                {!showAnswer[id] && (
                  <li>
                    <button
                      onClick={() => toggleAnswer(id)}
                      className="focus:outline-none"
                    >
                      <AddIcon className="text-gray-700" />
                    </button>
                  </li>
                )}

                {showAnswer[id] && (
                  <li>
                    <button
                      onClick={() => toggleAnswer(id)}
                      className="focus:outline-none"
                    >
                      <RemoveIcon className="text-gray-700" />
                    </button>
                  </li>
                )}
              </ul>
            </article>

            {showAnswer[id] && (
              <article className="border-t border-gray-400 p-4 lg:p-6">
                <p className="text-gray-700">{answer}</p>
              </article>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Faq;
