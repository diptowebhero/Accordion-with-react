import React, { Component } from "react";
import question from "../data";
import MyAccordion from "./MyAccordion";

class Accordion extends Component {
  state = { data: question };
  render() {
    const { data } = this.state;
    return (
      <div className="w-1/2 bg-white rounded-md">
        <div className="w-2/3 p-8 mx-auto space-y-3">
          <h3 className="font-bold text-2xl">সর্বাধিক জিজ্ঞাসিত প্রশ্নসমূহ </h3>
          <p>
            অ্যাফিলিয়েশন প্রোগ্রামে যুক্ত হতে সর্বাধিক জিজ্ঞাসিত প্রশ্নের
            উত্তরগুলো আমরা বাছাই করে নিয়ে এসেছি শুধুমাত্র আপনার জন্য। পুরো
            প্রোগ্রামটি সম্পর্কে ধারণা পেতে নিম্নোক্ত প্রশ্নের উত্তরগুলো পড়ুন:
          </p>
        </div>
        <div className="flex items-center justify-center space-x-12 mb-10">
          
          <div className="space-y-4">
            {data.map((question) => (
              <MyAccordion key={question.id} {...question} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
