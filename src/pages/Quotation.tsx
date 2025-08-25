import React, { useState } from 'react';
import { Home, Building2, ArrowRight, ArrowLeft, User, Phone, Mail, MessageCircle } from 'lucide-react';

interface FormData {
  cleaningType: 'residential' | 'commercial' | '';
  residential: {
    livingRooms: number;
    bedrooms: number;
    bathrooms: number;
    kitchens: number;
    otherRooms: { name: string; quantity: number }[];
  };
  commercial: {
    officeSize: string;
    numberOfOffices: number;
    washrooms: number;
    meetingRooms: number;
    otherAreas: string;
  };
  personal: {
    name: string;
    phone: string;
    email: string;
  };
}

const Quotation: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    cleaningType: '',
    residential: {
      livingRooms: 0,
      bedrooms: 0,
      bathrooms: 0,
      kitchens: 0,
      otherRooms: []
    },
    commercial: {
      officeSize: '',
      numberOfOffices: 0,
      washrooms: 0,
      meetingRooms: 0,
      otherAreas: ''
    },
    personal: {
      name: '',
      phone: '',
      email: ''
    }
  });

  const [newRoomName, setNewRoomName] = useState('');

  const handleCleaningTypeSelect = (type: 'residential' | 'commercial') => {
    setFormData({ ...formData, cleaningType: type });
    setStep(2);
  };

  const addOtherRoom = () => {
    if (newRoomName.trim()) {
      setFormData({
        ...formData,
        residential: {
          ...formData.residential,
          otherRooms: [
            ...formData.residential.otherRooms,
            { name: newRoomName.trim(), quantity: 1 }
          ]
        }
      });
      setNewRoomName('');
    }
  };

  const removeOtherRoom = (index: number) => {
    setFormData({
      ...formData,
      residential: {
        ...formData.residential,
        otherRooms: formData.residential.otherRooms.filter((_, i) => i !== index)
      }
    });
  };

  const updateOtherRoomQuantity = (index: number, quantity: number) => {
    const updatedRooms = [...formData.residential.otherRooms];
    updatedRooms[index].quantity = Math.max(0, quantity);
    setFormData({
      ...formData,
      residential: {
        ...formData.residential,
        otherRooms: updatedRooms
      }
    });
  };

  const generateWhatsAppMessage = () => {
    let message = "Hi! I'd like to request a quote for cleaning services.\n\n";
    
    if (formData.cleaningType === 'residential') {
      message += "🏠 *Residential Cleaning Request*\n";
      message += `• Living Rooms: ${formData.residential.livingRooms}\n`;
      message += `• Bedrooms: ${formData.residential.bedrooms}\n`;
      message += `• Bathrooms: ${formData.residential.bathrooms}\n`;
      message += `• Kitchens: ${formData.residential.kitchens}\n`;
      
      if (formData.residential.otherRooms.length > 0) {
        message += "• Other Rooms:\n";
        formData.residential.otherRooms.forEach(room => {
          message += `  - ${room.name}: ${room.quantity}\n`;
        });
      }
    } else if (formData.cleaningType === 'commercial') {
      message += "🏢 *Commercial Cleaning Request*\n";
      message += `• Office Size: ${formData.commercial.officeSize}\n`;
      message += `• Number of Offices: ${formData.commercial.numberOfOffices}\n`;
      message += `• Washrooms: ${formData.commercial.washrooms}\n`;
      message += `• Meeting Rooms: ${formData.commercial.meetingRooms}\n`;
      if (formData.commercial.otherAreas) {
        message += `• Other Areas: ${formData.commercial.otherAreas}\n`;
      }
    }

    message += `\n👤 *Contact Information*\n`;
    message += `• Name: ${formData.personal.name}\n`;
    message += `• Phone: ${formData.personal.phone}\n`;
    message += `• Email: ${formData.personal.email}\n`;
    
    message += `\nPlease provide me with a quote for these cleaning services. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/14168386535?text=${message}`, '_blank');
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-lightBlue/5">
      {/* Header */}
      <section className="bg-hero-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-ubuntu font-bold text-charcoal mb-4">
            Get Your <span className="text-primary">Free Quote</span>
          </h1>
          <p className="text-xl text-charcoal/80 font-openSans max-w-2xl mx-auto">
            Tell us about your cleaning needs and we'll provide a customized quote within minutes.
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step >= stepNum
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {stepNum}
              </div>
              <span
                className={`ml-2 font-openSans text-sm ${
                  step >= stepNum ? 'text-primary' : 'text-gray-500'
                }`}
              >
                {stepNum === 1 && 'Service Type'}
                {stepNum === 2 && 'Details'}
                {stepNum === 3 && 'Contact Info'}
              </span>
              {stepNum < 3 && (
                <div className="w-8 h-px bg-gray-300 mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Step 1: Service Type Selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl lg:text-3xl font-ubuntu font-bold text-charcoal mb-8 text-center">
                Select Your Cleaning Type
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => handleCleaningTypeSelect('residential')}
                  className="p-8 border-2 border-gray-200 rounded-3xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Home size={40} className="text-primary" />
                    </div>
                    <h3 className="font-ubuntu font-bold text-xl text-charcoal mb-4">
                      Residential Cleaning
                    </h3>
                    <p className="text-charcoal/70 font-openSans">
                      Perfect for homes, apartments, and condos. We'll clean your living spaces to perfection.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => handleCleaningTypeSelect('commercial')}
                  className="p-8 border-2 border-gray-200 rounded-3xl hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Building2 size={40} className="text-primary" />
                    </div>
                    <h3 className="font-ubuntu font-bold text-xl text-charcoal mb-4">
                      Commercial Cleaning
                    </h3>
                    <p className="text-charcoal/70 font-openSans">
                      Ideal for offices, retail spaces, and commercial properties. Professional workspace cleaning.
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Cleaning Details */}
          {step === 2 && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl lg:text-3xl font-ubuntu font-bold text-charcoal">
                  {formData.cleaningType === 'residential' ? 'Home' : 'Office'} Details
                </h2>
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 font-openSans"
                >
                  <ArrowLeft size={20} />
                  <span>Back</span>
                </button>
              </div>

              {/* Residential Form */}
              {formData.cleaningType === 'residential' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { key: 'livingRooms', label: 'Living Rooms' },
                      { key: 'bedrooms', label: 'Bedrooms' },
                      { key: 'bathrooms', label: 'Bathrooms' },
                      { key: 'kitchens', label: 'Kitchens' }
                    ].map(({ key, label }) => (
                      <div key={key} className="text-center">
                        <label className="block font-ubuntu font-medium text-charcoal mb-4">
                          {label}
                        </label>
                        <div className="flex items-center justify-center space-x-4">
                          <button
                            type="button"
                            onClick={() => setFormData({
                              ...formData,
                              residential: {
                                ...formData.residential,
                                [key]: Math.max(0, formData.residential[key as keyof typeof formData.residential] as number - 1)
                              }
                            })}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-200"
                          >
                            -
                          </button>
                          <span className="w-12 text-center font-ubuntu font-bold text-xl text-charcoal">
                            {formData.residential[key as keyof typeof formData.residential]}
                          </span>
                          <button
                            type="button"
                            onClick={() => setFormData({
                              ...formData,
                              residential: {
                                ...formData.residential,
                                [key]: (formData.residential[key as keyof typeof formData.residential] as number) + 1
                              }
                            })}
                            className="w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-xl flex items-center justify-center transition-colors duration-200"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Other Rooms Section */}
                  <div className="border-t pt-8">
                    <h3 className="font-ubuntu font-bold text-xl text-charcoal mb-6">Additional Rooms</h3>
                    <div className="space-y-4">
                      {formData.residential.otherRooms.map((room, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-lightBlue/10 rounded-2xl">
                          <span className="flex-1 font-openSans font-medium text-charcoal">
                            {room.name}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => updateOtherRoomQuantity(index, room.quantity - 1)}
                              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-sm transition-colors duration-200"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-ubuntu font-bold text-charcoal">
                              {room.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateOtherRoomQuantity(index, room.quantity + 1)}
                              className="w-8 h-8 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center justify-center text-sm transition-colors duration-200"
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeOtherRoom(index)}
                            className="text-red-500 hover:text-red-700 font-openSans text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      
                      <div className="flex items-center space-x-4">
                        <input
                          type="text"
                          placeholder="Enter room name (e.g., Den, Basement, etc.)"
                          value={newRoomName}
                          onChange={(e) => setNewRoomName(e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans"
                        />
                        <button
                          type="button"
                          onClick={addOtherRoom}
                          disabled={!newRoomName.trim()}
                          className="bg-primary text-white px-6 py-3 rounded-2xl font-openSans font-medium hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                          Add Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Commercial Form */}
              {formData.cleaningType === 'commercial' && (
                <div className="space-y-6">
                  <div>
                    <label className="block font-ubuntu font-medium text-charcoal mb-2">
                      Office Size (sq. ft. or describe)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 2000 sq ft or Small office with 5 rooms"
                      value={formData.commercial.officeSize}
                      onChange={(e) => setFormData({
                        ...formData,
                        commercial: { ...formData.commercial, officeSize: e.target.value }
                      })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { key: 'numberOfOffices', label: 'Number of Offices' },
                      { key: 'washrooms', label: 'Washrooms' },
                      { key: 'meetingRooms', label: 'Meeting Rooms' }
                    ].map(({ key, label }) => (
                      <div key={key} className="text-center">
                        <label className="block font-ubuntu font-medium text-charcoal mb-4">
                          {label}
                        </label>
                        <div className="flex items-center justify-center space-x-4">
                          <button
                            type="button"
                            onClick={() => setFormData({
                              ...formData,
                              commercial: {
                                ...formData.commercial,
                                [key]: Math.max(0, formData.commercial[key as keyof typeof formData.commercial] as number - 1)
                              }
                            })}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-200"
                          >
                            -
                          </button>
                          <span className="w-12 text-center font-ubuntu font-bold text-xl text-charcoal">
                            {formData.commercial[key as keyof typeof formData.commercial]}
                          </span>
                          <button
                            type="button"
                            onClick={() => setFormData({
                              ...formData,
                              commercial: {
                                ...formData.commercial,
                                [key]: (formData.commercial[key as keyof typeof formData.commercial] as number) + 1
                              }
                            })}
                            className="w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-xl flex items-center justify-center transition-colors duration-200"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block font-ubuntu font-medium text-charcoal mb-2">
                      Other Areas (optional)
                    </label>
                    <textarea
                      placeholder="e.g., Reception area, Break room, Storage areas, etc."
                      value={formData.commercial.otherAreas}
                      onChange={(e) => setFormData({
                        ...formData,
                        commercial: { ...formData.commercial, otherAreas: e.target.value }
                      })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end mt-8">
                <button
                  onClick={nextStep}
                  className="bg-primary text-white px-8 py-3 rounded-2xl font-openSans font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Personal Information */}
          {step === 3 && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl lg:text-3xl font-ubuntu font-bold text-charcoal">
                  Contact Information
                </h2>
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 font-openSans"
                >
                  <ArrowLeft size={20} />
                  <span>Back</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-ubuntu font-medium text-charcoal mb-2">
                    <User size={20} className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.personal.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      personal: { ...formData.personal, name: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block font-ubuntu font-medium text-charcoal mb-2">
                    <Phone size={20} className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.personal.phone}
                    onChange={(e) => setFormData({
                      ...formData,
                      personal: { ...formData.personal, phone: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans"
                    placeholder="+1 (416) 123-4567"
                  />
                </div>

                <div>
                  <label className="block font-ubuntu font-medium text-charcoal mb-2">
                    <Mail size={20} className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.personal.email}
                    onChange={(e) => setFormData({
                      ...formData,
                      personal: { ...formData.personal, email: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent font-openSans"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="bg-lightBlue/10 rounded-2xl p-6 mt-8">
                  <h3 className="font-ubuntu font-bold text-charcoal mb-4">What happens next?</h3>
                  <ul className="space-y-2 font-openSans text-charcoal/80">
                    <li className="flex items-center">
                      <MessageCircle size={16} className="text-primary mr-2" />
                      Your quote request will be sent via WhatsApp
                    </li>
                    <li className="flex items-center">
                      <Phone size={16} className="text-primary mr-2" />
                      We'll contact you within 30 minutes during business hours
                    </li>
                    <li className="flex items-center">
                      <User size={16} className="text-primary mr-2" />
                      Free consultation to discuss your specific needs
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-openSans font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={24} />
                  <span>Send Quote Request via WhatsApp</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotation;