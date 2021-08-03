import React from "react";
import BasicContainer from "../Container/BasicContainer";
import Diagnosis from "./Diagnosis";

function AddDiagnosis() {
  const categories = [
    "Ankle",
    "Cervical",
    "Elbow",
    "Foot",
    "Hand",
    "Hip",
    "Knee",
    "Lumbar",
    "Neurological Conditions",
    "Pelvis",
    "Shoulder",
    "Thoracic Spine",
    "Wrist",
  ];

  const data = {
    Ankle: [
      "Ankle and Foot Fracture",
      "Avulsion Ankle Fracture",
      "Achilles Rupture",
      "Achilles Tendinopathy",
      "Ankle Impingement",
      "Ankle Sprain",
      "Chronic Ankle Instability",
      "Compartment Syndrome of Lower Leg",
      "Danis-Weber Classification of Ankle Fracture",
      "Diabetic Neuropathy",
      "Lateral Ligament Injury Of Ankle",
      "Leg and Foot Stress Fracture",
      "Peroneal Tendinopathy",
      "Peroneal Tendon Subluxation",
      "Posterior Tibial Tendon Dysfunction",
      "Pott's Fracture",
      "Retro-Calcaneal Bursitis",
      "Shin Splints",
      "Subtalar Dislocation",
      "Tarsal Tunnel Syndrome",
      "Tibio-fibular Diastasis",
    ],
    Cervical: [
      "Cervical Instability",
      "Cervical Spondylosis",
      "Cervical Stenosis",
      "Cervical Rib",
      "Cervicobrachial Syndrome",
      "Cervicogenic Headache",
      "Chronic Neck Pain",
      "Forward Head Posture",
      "Levator Scapulae Syndrome",
      "Text Neck",
      "Trigeminal Neuralgia",
      "Upper Crossed Syndromes",
      "Mechanical Neck Pain",
    ],
    Elbow: [
      "Anterior Interosseous Nerve Syndorme ",
      "Posterior Interosseous Nerve Syndrome",
      "Compartment Syndrome of Forearm",
      "Cubital Tunnel Syndrome",
      "Tennis Elbow",
      "Golfer's elbow",
      "Olecranon Bursitis",
      "Olecranon Fracture",
      "Posterior Elbow Dislocation",
      "Radial Tunnel Syndrome",
      "Rupture Long Head Biceps",
      "Subcondylor Humerus Fracture",
      "Triceps Tendinitis",
      "Ulnar Nerve Entrapment",
    ],
    Foot: [
      "Foot Pain",
      "Hallux Valgus",
      "Hallux Rigidus",
      "Foot deformity",
      "Plantar Fasciitis",
      "Plantar Heel Pain",
      "Turf Toe",
    ],
    Hand: [
      "Carpal Tunnel Syndrome",
      "Congenital Hand Deformity",
      "De-Quevain's Tenosynovitis",
      "Dupuytren's Contracture",
      "Finger Dislocation",
      "Flexor Tendon Injuries",
      "Extensor Tendon Injuries",
      "Gamekeeper's Thumb",
      "Hand Rheumatoid Arthritis",
      "Jersey Finger",
      "Mallet Finger",
      "Metacarpal Fracture",
      "Scaphoid Fracture",
      "Swan Neck Deformity",
      "Trigger Finger ",
      "Volkmann's Contracture",
      "Wrist and Hand Osteoarthritis",
    ],
    Hip: [
      "Acetabulum Fracture",
      "Avascular Necrosis",
      "Femoral Fracture",
      "Femoral Stress Fracture",
      "Femoroacetabular Impingement",
      "Greater Trochanteric Pain Syndrome",
      "Hamstring Strain",
      "Hip Dislocation",
      "Hip Dysplasia",
      "Hip Osteoarthritis",
      "Iliopsoas Bursitis ",
      "Iliopsoas Tendinopathy ",
      "Labral Tear of Hip",
      "Piriformis syndrome",
      "Snapping Hip Syndrome",
      "Trendelenburg Gait",
    ],
    Knee: [
      "ACL Rehabilitation: Re-injury and Return to Sport ",
      "Anterior Cruciate Ligament (ACL) Injury",
      "Baker's Cyst",
      "Chondromalacia Patellae",
      "Patello-femoral Pain Syndrome",
      "Meniscal Injury",
      "Distal Femoral Fracture",
      "Fat Pad Syndrome",
      "Floating Knee",
      "Knee Osteoarthritis",
      "Knee Rotary Instability",
      "Collateral Ligament Injury of the Knee",
      "Osgood-Schlatter's Disease",
      "Patellar Tendinopathy",
      "Patellar malalignment",
      "Patellar Fracture",
      "Patellar dislocation",
      "Pes Anserinus Bursitis",
      "Prepatellar bursitis",
      "Popliteus strain",
      "Popliteus Tendinopathy",
      "Posterior Cruciate Ligament Injury",
      "Posterior Knee Pain ",
      "Quadriceps Muscle Strain or Tendon Tear",
      "Swimming Overuse Injuries",
      "Tibial Plateau Fractures",
    ],
    Lumbar: [
      "Lumbar Compression Fracture",
      "Lumbar Spine Fracture",
      "Lumbar Discogenic Pain",
      "Lumbar Facet Syndrome",
      "Lumbar Instability",
      "Lumbar Radiculopathy",
      "Lumbar Spinal Stenosis ",
      "Lumbar Strain",
      "Lumbar Spondylosis",
      "Lumbar Spondylolysis",
      "Lumbar Spondylolisthesis",
      "Sacroiliitis",
      "Sciatica",
      "Scoliosis",
      "Spondylolysis",
      "Low Back Pain",
    ],
    "Neurological Conditions": [
      "Multiple Sclerosis",
      "Parkinson's‎",
      "Spinal Cord Injuries",
      "Stroke",
      "Cerebral Palsy",
      "Muscular Dystrophy",
      "Guillain Barre Syndrome",
      "Bell's Palsy",
      "Bilateral Facial Palsy",
      "Bilateral Vestibular Hypofunction",
      "Brachial plexus injury",
      "Foot Drop",
      "Ataxia",
      "Meningoencephalitis",
      "Transient Ischaemic Attack (TIA)",
    ],
    Pelvis: [
      "Ankylosing Spondylitis",
      "Chronic Pelvic Pain Syndrome",
      "Coccygodynia",
      "Deep Gluteal Pain Syndrome",
      "Diastasis Recti Abdominis",
      "Incontinence",
      "Low Back Pain and Pelvic Floor Disorders",
      "Low Back Pain and Pregnancy",
      "Lower Crossed Syndrome",
      "Pelvic Floor Dysfunction",
      "Sacroiliac Joint Syndrome",
      "Uterine Prolapse",
    ],
    Shoulder: [
      "Acromioclavicular Arthritis",
      "Acromioclavicular Joint Disorder",
      "Frozen Shoulder",
      "Anterior Shoulder Instability",
      "Rotator Cuff Tears",
      "Rotator Cuff Tendinopathy",
      "Pectoralis Major Rupture",
      "Posterior Shoulder Instability",
      "Scapular Dyskinesia",
      "Shoulder Bursitis",
      "Shoulder Dislocation",
      "Shoulder Instability",
      "Shoulder Osteoarthritis",
      "Shoulder subluxation",
      "SLAP Lesion",
      "Sternal fracture",
      "Sternoclavicular Joint Disorders",
      "Subacromial Pain Syndrome",
      "Supraspinatus Tear",
      "Supraspinatus Tendinopathy",
      "Swimming Overuse Injuries",
    ],
    "Thoracic Spine": [
      "Congenital Spine Deformities",
      "Costochondritis",
      "Hyperkyphosis",
      "Intercostal Muscle Strain",
      "Rib Fracture",
      "Rib Stress Fracture",
      "T4 Syndrome",
      "Thoracic Back Pain",
      "Thoracic Disc Syndrome",
      "Thoracic Instability",
      "Thoracic Radiculopathy",
      "Thoracic Spine Fracture",
      "Thoracic Spine Fracture",
    ],
    Wrist: [
      "Colles Fracture",
      "Colles’ Fracture Post Operative Rehabilitation",
      "Ganglion Cyst",
      "Guyon Canal Syndrome",
      "Hamate Fracture",
      "Intersection Syndrome",
      "Lunate Instability",
      "Scaphoid Fracture",
      "Posterior Interosseous Nerve Syndrome",
      "Radial Tunnel Syndrome",
      "Scapholunate Dissociation",
      "Triangular Fibrocartilage Complex Injuries",
      "Ulnar Impaction Syndrome",
      "Wrist Sprain",
    ],
  };

  const [category, setCategory] = React.useState("");

  return (
    <BasicContainer>
      <Diagnosis
        categories={categories}
        setCategory={setCategory}
        diagnosis={data[category] || []}
      />
    </BasicContainer>
  );
}

export default AddDiagnosis;
