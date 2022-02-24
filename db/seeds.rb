puts "Destroying seeds..."

User.destroy_all
Facility.destroy_all
Post.destroy_all


puts "Seeding facilities..."

30.times{Facility.create({name:Faker::Commerce.vendor, address: Faker::Address.street_address ,state: Faker::Address.state, city: Faker::Address.city, zip: Faker::Address.zip })}

puts "Seeding users..."

50.times{User.create!({username:Faker::Internet.username, password_digest: Faker::Internet.password, email: Faker::Internet.email, gender: Faker::Demographic.sex, race: Faker::Demographic.race, state: Faker::Address.state, city: Faker::Address.city, insurance: Faker::Commerce.brand})}

# 50.times{User.create!({username: Faker::Internet.username, password_digest: Faker::Internet.password, email: Faker::Internet.email})}


puts "Seeding Posts..."

procedure = ["Appendectomy","Cataract Surgery / Refractive Lens Exchange","C-Section","CT Scan"," Echocardiogram","Heart Bypass Surgery"," Hip Replacement Surgery"," MRI"," Upper Endoscopy","X-Ray"," Ablation"", Aneurysm Repair","Angioplasty & Stent Placement"," Aortic Valve Replacements / TAVR","Cardiac Catheterization"," Cardioversion","Carotid Surgery"," Heart Bypass Surgery","Heart Valve Repair"", Left Ventricular Assist Device"," Pacemakers"," Trans-myocardial Revascularization, Appendectomy"," Continuous Glucose Monitoring"," Hernia Surgery, Sleep Study / Polysomnogram (PSG)"," Weight Loss Surgery", "Echocardiogram EKG / ECG"," Ultrasound, Electroencephalogram (EEG)"," Electromyography (EMG)"," Epilepsy Surgery"," Lumbar Puncture / Spinal Tap"," Barium Enema"," Biopsy"," Bone Marrow Aspiration","Bone Scan"," Breast MRI","Carcinoembryonic Antigen Test (CEA Test)"," Chemotherapy"," Colonoscopy","CT Scan","Digital Rectal Exam","Fecal Occult Blood Tests","Liver-Spleen Scan"," Lung Biopsy"," Mammography"," MRI","Pap Test","PET Scan"," Proctoscopy","Prostate Biopsy"," Prostatectomy"," Sigmoidoscopy","Thyroid Biopsy","Tumor Marker Tests"," Upper Endoscopy Virtual Colonoscopy / CT Colonography", "Cataract Surgery / Refractive Lens Exchange"," Diabetic Retinopathy Surgery / Vitrectomy"," Laser Surgery for Glaucoma (ALT)"," LASIK"," PRK (Photorefractive Keratectomy)", "ACL Reconstruction Surgery"," Ankle Replacement Surgery"," Arthroscopy"," Bone Fracture Repair","Cervical Disc Surgery","Herniated Disk Surgery"," Hip Replacement Surgery","Joint Fusion Surgery"," Knee Replacement Surgery"," Laminectomy"," Osteotomy","Rotator Cuff Surgery","Shoulder Replacement Surgery"," Spinal Fusion"," Tommy John Surgery / UCL Reconstruction","Torn PCL Surgery"," Vertebroplasty / Kyphoplasty"," Clubfoot Correction","Congenital Heart Defect Surgery", "ACL Reconstruction Surgery"," Bone Fracture Repair","CT Scan"," MRI Physical Therapy"," Rotator Cuff Surgery"," Tennis Elbow Surgery","Tommy John Surgery / UCL Reconstruction","Torn PCL Surgery", "Bone Marrow / Stem Cell Transplant","Cornea Transplant"," Heart Transplant"," Kidney Transplant"," Liver Transplant","Lung Transplant","Pancreas Transplant"]


50.times{Post.create!({user_id:User.all.sample.id, facility_id:Facility.all.sample.id, procedure: procedure.sample, date_of_procedure: Faker::Date.between(from: '2014-09-23', to: '2014-09-25'), date_of_invoice: Faker::Date.between(from: '2014-09-24', to: '2020-09-25'), patient_cost:Faker::Commerce.price(range: 0..5000.0), insurance_cost: Faker::Commerce.price(range: 0..10000.0), comments: Faker::Restaurant.review})}

puts "Done Seeding!"