import gastroImg from '../assets/blog_images/gastro_health.jpg';
import liverImg from '../assets/blog_images/liver_health.jpg';
import gutBrainImg from '../assets/blog_images/gut_brain.jpg';
import acidityImg from '../assets/blog_images/acidity.jpg';
import probioticsImg from '../assets/blog_images/probiotics.jpg';
import cirrhosisImg from '../assets/blog_images/cirrhosis.jpg';
import ulcerImg from '../assets/blog_images/ulcer.png';
import jaundiceImg from '../assets/blog_images/jaundice.jpg';
import herniaImg from '../assets/blog_images/hernia.png';
import pilesImg from '../assets/blog_images/piles.png';
import fistulaImg from '../assets/blog_images/fistula.svg';
import obesityImg from '../assets/blog_images/obesity.svg';
import digestiveImg from '../assets/blog_images/digestive_system.svg';
import abdominalImg from '../assets/blog_images/abdominal_pain.png';

export const blogPosts = [
  {
    id: 1,
    title: "Understanding Gastro Health: Tips for a Healthy Digestive System",
    excerpt: "Digestive health is crucial for overall well-being. Learn about common gastrointestinal issues and simple lifestyle changes to keep your gut happy.",
    date: "October 24, 2023",
    category: "Gastro Health",
    image: gastroImg,
    content: `
      <p class="mb-4">Your digestive system plays a vital role in your overall health, breaking down food into nutrients your body uses for energy, growth, and cell repair. Here are some essential tips for maintaining a healthy gastrointestinal tract.</p>
      
      <h3 class="text-xl font-bold mb-2">1. Eat a High-Fiber Diet</h3>
      <p class="mb-4">Consuming a diet that's high in fiber and rich in whole grains, vegetables, legumes, and fruits can improve your digestive health. A high-fiber diet helps to keep food moving through your digestive tract, making you less likely to get constipated.</p>
      
      <h3 class="text-xl font-bold mb-2">2. Stay Hydrated</h3>
      <p class="mb-4">Water is essential for your digestive health. It helps break down food so that your body can absorb the nutrients. It also softens stool, which helps prevent constipation.</p>

      <h3 class="text-xl font-bold mb-2">3. Limit Foods High in Fat</h3>
      <p class="mb-4">Fatty foods tend to slow down the digestive process, making you more prone to constipation. Combine fatty foods with high-fiber foods to make them easier on your digestive system.</p>

      <h3 class="text-xl font-bold mb-2">4. Manage Stress</h3>
      <p class="mb-4">Too much stress or anxiety can cause your digestive system to go into overdrive. Practice stress-managing activities like meditation, relaxation exercises, or yoga.</p>
    `
  },
  {
    id: 2,
    title: "Liver Health 101: Preventing Fatty Liver and Maintaining Function",
    excerpt: "Your liver is your body's filtration system. Discover how to protect it from fatty liver disease and ensure it functions optimally for years to come.",
    date: "November 15, 2023",
    category: "Liver Health",
    image: liverImg,
    content: `
      <p class="mb-4">The liver is one of the most hardworking organs in the body, performing over 500 vital functions. Taking care of your liver is essential for a long, healthy life.</p>
      
      <h3 class="text-xl font-bold mb-2">Understanding Fatty Liver Disease</h3>
      <p class="mb-4">Non-alcoholic fatty liver disease (NAFLD) is the accumulation of extra fat in liver cells that is not caused by alcohol. It is normal for the liver to contain some fat. However, if more than 5% - 10% of the liver's weight is fat, then it is called a fatty liver (steatosis).</p>
      
      <h3 class="text-xl font-bold mb-2">Tips for a Healthy Liver</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Maintain a Healthy Weight:</strong> If you are obese or even somewhat overweight, you are in danger of having a fatty liver. Weight loss can play a significant part in helping to reduce liver fat.</li>
        <li><strong>Eat a Balanced Diet:</strong> Avoid high calorie-meals, saturated fat, refined carbohydrates (such as white bread, white rice and regular pasta) and sugars.</li>
        <li><strong>Exercise Regularly:</strong> Consistent physical activity helps to burn triglycerides for fuel and can also reduce liver fat.</li>
        <li><strong>Limit Alcohol:</strong> Alcohol can damage or destroy liver cells and scar your liver. Talk to your doctor about what amount of alcohol is right for you.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">Regular Screenings</h3>
      <p class="mb-4">Liver disease can be a silent killer. Regular check-ups and blood tests can help detect liver issues early when they are most treatable.</p>
    `
  },
  {
    id: 3,
    title: "The Gut-Brain Connection: How Your Stomach Affects Your Mood",
    excerpt: "Ever had a 'gut feeling'? There's a powerful connection between your digestive system and your brain. Explore how gut health influences mental well-being.",
    date: "December 5, 2023",
    category: "Gut Health",
    image: gutBrainImg,
    content: `
      <p class="mb-4">The gut-brain axis is a complex communication network linking your enteric nervous system (in your gut) and your central nervous system (brain). This connection explains why your stomach might feel uneasy when you're stressed.</p>
      
      <h3 class="text-xl font-bold mb-2">Serotonin Production</h3>
      <p class="mb-4">Did you know that about 95% of your body's serotonin—the hormone that stabilizes mood—is produced in your gut? A healthy gut microbiome is essential for maintaining optimal serotonin levels and a balanced mood.</p>
      
      <h3 class="text-xl font-bold mb-2">Stress and Digestion</h3>
      <p class="mb-4">Chronic stress can disrupt the gut-brain axis, leading to digestive issues like IBS (Irritable Bowel Syndrome). Conversely, gastrointestinal problems can send signals to the brain that trigger anxiety and depression.</p>

      <h3 class="text-xl font-bold mb-2">Nurturing the Connection</h3>
      <p class="mb-4">To support both your gut and brain, focus on whole foods, fermented foods like yogurt and kimchi, and managing stress levels through mindfulness practices.</p>
    `
  },
  {
    id: 4,
    title: "Acidity & Acid Reflux: Triggers, Symptoms, and Management",
    excerpt: "Acidity leads to a pH imbalance in the body. Understand the difference between acidity and gas, its causes, early symptoms, and how to manage it effectively.",
    date: "January 10, 2024",
    category: "Stomach",
    image: acidityImg,
    content: `
      <p class="mb-4">Acidity or acidosis leads to an imbalance of pH in the body. While often used interchangeably with acid reflux, understanding the root causes is key to treatment.</p>
      
      <h3 class="text-xl font-bold mb-2">What causes acidity?</h3>
      <p class="mb-4">Our stomach produces gastric acids to aid digestion. The corrosive effects are normally balanced by the mucous lining. When this balance is disrupted, it damages the lining, causing acidity.</p>
      <p class="mb-2"><strong>Common Triggers:</strong></p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Consuming non-vegetarian and spicy foods.</li>
        <li>Excessive stress.</li>
        <li>Consuming too much alcohol or smoking frequently.</li>
        <li>Stomach disorders like tumors, GERD, and peptic ulcers.</li>
        <li>Medications such as NSAIDs.</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Early Symptoms</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Heartburn:</strong> A burning pain moving from the stomach to the chest or throat.</li>
        <li><strong>Regurgitation:</strong> A bitter/sour taste in the throat or mouth.</li>
        <li><strong>Other Sign:</strong> Bloating, frequent burps, nausea, vomiting, chronic sore throat, and persistent dry cough.</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Acidity vs. Gas</h3>
      <p class="mb-4"><strong>Acidity</strong> is the overproduction of acid often accompanied by heartburn. <strong>Gas</strong> is produced in the colon and aids digestion but can cause pain if trapped due to overeating or spicy food.</p>

      <h3 class="text-xl font-bold mb-2">Management & complications</h3>
      <p class="mb-4">Occasional acidity is normal, but high frequency is a serious concern. Without early treatment, it can lead to complications such as ulcers, strictures, and esophageal inflammation. Consult a doctor for chronic symptoms.</p>
    `
  },
  {
    id: 5,
    title: "Probiotics vs. Prebiotics: What Your Gut Needs",
    excerpt: "Confused about 'biotics'? We break down the difference between probiotics and prebiotics and why your gut needs both to thrive.",
    date: "January 28, 2024",
    category: "Gut Health",
    image: probioticsImg,
    content: `
      <p class="mb-4">A healthy microbiome is a diverse one. To achieve this, you need a balance of both probiotics and prebiotics.</p>
      
      <h3 class="text-xl font-bold mb-2">What are Probiotics?</h3>
      <p class="mb-4">Probiotics are live beneficial bacteria found in certain foods or supplements. Common sources include yogurt, kefir, sauerkraut, tempeh, and kimchi. They help populate your gut with 'good' bacteria.</p>
      
      <h3 class="text-xl font-bold mb-2">What are Prebiotics?</h3>
      <p class="mb-4">Prebiotics are types of fiber that human cells cannot digest. Instead, your gut bacteria eat them. They serve as 'fertilizer' for the probiotics. Good sources include garlic, onions, bananas, and asparagus.</p>

      <h3 class="text-xl font-bold mb-2">The Synbiotic Effect</h3>
      <p class="mb-4">Combining probiotic-rich foods with prebiotic fibers creates a synergistic effect, maximizing the health benefits for your digestive system.</p>
    `
  },
  {
    id: 6,
    title: "Liver Cirrhosis: Causes, Symptoms, and Prevention",
    excerpt: "Cirrhosis is a late stage of scarring (fibrosis) of the liver. Understand the risk factors and how early intervention can save your liver.",
    date: "February 15, 2024",
    category: "Liver Health",
    image: cirrhosisImg,
    content: `
      <p class="mb-4">Cirrhosis involves the loss of liver cells and irreversible scarring of the liver. It's a progressive condition that can lead to liver failure if not managed.</p>
      
      <h3 class="text-xl font-bold mb-2">Major Causes</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Chronic Alcohol Abuse:</strong> Long-term excessive alcohol consumption is a leading cause.</li>
        <li><strong>Viral Hepatitis:</strong> Hepatitis B and C cause chronic inflammation leading to scarring.</li>
        <li><strong>Fatty Liver Disease:</strong> Advanced NAFLD can progress to cirrhosis over time.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">Warning Signs</h3>
      <p class="mb-4">Early symptoms may include fatigue and weight loss. Advanced signs include jaundice (yellowing of skin/eyes), easy bruising, and swelling in the legs and abdomen.</p>
      
      <h3 class="text-xl font-bold mb-2">Prevention is Key</h3>
      <p class="mb-4">Vaccination against Hepatitis, moderating alcohol intake, and maintaining a healthy metabolic profile are the best ways to prevent the damage that leads to cirrhosis.</p>
    `
  },
  {
    id: 7,
    title: "Understanding Hernia: Types, Causes, and Minimal Invasive Repair",
    excerpt: "A hernia doesn't go away on its own. Learn about the different types (Inguinal, Umbilical) and how modern laparoscopic repair offers quick recovery.",
    date: "March 5, 2024",
    category: "Surgery",
    image: herniaImg,
    content: `
      <p class="mb-4">A hernia occurs when an internal organ or other body part protrudes through the wall of muscle or tissue that normally contains it. Most hernias occur within the abdominal cavity, between the chest and the hips.</p>
      
      <h3 class="text-xl font-bold mb-2">Common Types of Hernia</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Inguinal Hernia:</strong> The most common type, occurring in the inner groin.</li>
        <li><strong>Femoral Hernia:</strong> Occurs in the upper thigh/outer groin.</li>
        <li><strong>Umbilical Hernia:</strong> Appears near the belly button (navel).</li>
        <li><strong>Hiatal Hernia:</strong> Occurs inside the abdomen, along the upper stomach/diaphragm.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">Treatment Options</h3>
      <p class="mb-4">Hernias generally do not get better on their own. Surgery is typically the only way to repair them. Fortunately, with <strong>Laparoscopic (Keyhole) Surgery</strong>, the repair is minimally invasive, resulting in less pain and faster recovery compared to open surgery.</p>
    `
  },
  {
    id: 8,
    title: "Hemorrhoids (Piles): Causes, Symptoms, and Painless Treatment",
    excerpt: "Piles can be painful and embarrassing, but they are very treatable. Discover the causes and our advanced painless solutions.",
    date: "March 12, 2024",
    category: "Rectal Health",
    image: pilesImg,
    content: `
      <p class="mb-4">Hemorrhoids, also known as piles, are swollen veins in your lower rectum. They are similar to varicose veins. Hemorrhoids can develop inside the rectum (internal hemorrhoids) or under the skin around the anus (external hemorrhoids).</p>
      
      <h3 class="text-xl font-bold mb-2">Common Symptoms</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Painless bleeding during bowel movements.</li>
        <li>Itching or irritation in your anal region.</li>
        <li>Pain or discomfort.</li>
        <li>Swelling around your anus.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">Modern Treatment</h3>
      <p class="mb-4">We offer advanced, <strong>painless laser treatments (LHP)</strong> and stapler surgery for piles. These procedures are day-care surgeries with minimal blood loss and almost no postoperative pain, ensuring you get back to normal life quickly.</p>
    `
  },
  {
    id: 9,
    title: "Anal Fistula: Understanding the Condition and Surgical Care",
    excerpt: "Recurrent abscesses? It might be a fistula. Learn why surgery is essential for a permanent cure.",
    date: "March 18, 2024",
    category: "Rectal Health",
    image: fistulaImg,
    content: `
      <p class="mb-4">An anal fistula is a small tunnel that develops between the end of the bowel and the skin near the anus. It is usually the result of an infection near the anus causing a collection of pus (abscess) in the nearby tissue.</p>
      
      <h3 class="text-xl font-bold mb-2">Why Surgery is Necessary</h3>
      <p class="mb-4">Anal fistulas very rarely heal if left untreated. Chronic fistulas can lead to recurrent infection and pain.</p>
      
      <h3 class="text-xl font-bold mb-2">Our Surgical Approach</h3>
      <p class="mb-4">Treatment depends on the fistula's position. We use techniques like <strong>VAAFT (Video Assisted Anal Fistula Treatment)</strong> and laser closure to treat the tract effectively while preserving the sphincter muscles, preventing incontinence.</p>
    `
  },
  {
    id: 10,
    title: "Obesity & Metabolic Health: Beyond Just Weight Loss",
    excerpt: "Obesity is a complex disease involving an excessive amount of body fat. Explore how Bariatric surgery can reverse metabolic conditions.",
    date: "March 25, 2024",
    category: "Weight Loss",
    image: obesityImg,
    content: `
      <p class="mb-4">Obesity is not just a cosmetic concern. It is a medical problem that increases your risk of other diseases and health problems, such as heart disease, diabetes, high blood pressure and certain cancers.</p>
      
      <h3 class="text-xl font-bold mb-2">Bariatric Surgery</h3>
      <p class="mb-4">For individuals with severe obesity (BMI > 35-40), diet and exercise might not be enough. <strong>Bariatric surgery</strong> (like Sleeve Gastrectomy or Gastric Bypass) changes your digestive system to help you lose weight.</p>
      
      <h3 class="text-xl font-bold mb-2">Health Benefits</h3>
      <p class="mb-4">Beyond weight loss, this surgery often resolves Type 2 Diabetes, sleep apnea, and hypertension, significantly improving quality of life and longevity.</p>
    `
  },
  {
    id: 11,
    title: "Diarrhoea: Acute vs. Chronic and When to Seek Help",
    excerpt: "Diarrhoea is common, but when does it become dangerous? Learn about hydration, causes, and warning signs.",
    date: "April 2, 2024",
    category: "Gastro Health",
    image: digestiveImg,
    content: `
      <p class="mb-4">Diarrhoea describes loose, watery stools that occur more frequently than usual. While it's often caused by a virus aimed at the gut, it can also signal chronic conditions.</p>
      
      <h3 class="text-xl font-bold mb-2">Acute vs. Chronic</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Acute:</strong> Lasts 1-2 days, usually viral or bacterial.</li>
        <li><strong>Chronic:</strong> Lasts at least four weeks. Could be IBS, Crohn's, or Celiac disease.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">Dehydration Danger</h3>
      <p class="mb-4">The biggest danger of diarrhoea is dehydration. Drink plenty of fluids (ORS) and seek help if you have severe abdominal pain, blood in stools, or fever.</p>
    `
  },
  {
    id: 12,
    title: "Constipation: Causes and Effective Management",
    excerpt: "Struggling with regularity? Constipation is more than just infrequent bowel movements. Find out how to get things moving naturally.",
    date: "April 10, 2024",
    category: "Gastro Health",
    image: digestiveImg,
    content: `
      <p class="mb-4">Constipation occurs when bowel movements become less frequent and stools become difficult to pass. It happens most often due to changes in diet or routine, or due to inadequate intake of fiber.</p>
      
      <h3 class="text-xl font-bold mb-2">Simple Lifestyle Fixes</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Increase fiber intake (fruits, vegetables, grains).</li>
        <li>Drink 2-3 liters of water daily.</li>
        <li>Exercise regularly to stimulate gut motility.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">When to see a doctor?</h3>
      <p class="mb-4">If lifestyle changes doesn't handle the issue, or if you have sudden onset constipation with pain or blood, consult a specialist to rule out obstruction or other issues.</p>
    `
  },
  {
    id: 13,
    title: "Decoding Abdominal Pain: Location Matters",
    excerpt: "Stomach pain can range from mild ache to sharp cramps. The location of your pain holds the clue to the cause.",
    date: "April 20, 2024",
    category: "Diagnosis",
    image: abdominalImg,
    content: `
      <p class="mb-4">Abdominal pain is a symptom of many possible conditions. The abdomen contains many vital organs including the stomach, liver, pancreas, small and large bowel, and reproductive organs.</p>
      
      <h3 class="text-xl font-bold mb-2">Pain Locations & Possible Causes</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Upper Right:</strong> Gallstones, Hepatitis, Liver issues.</li>
        <li><strong>Upper Center:</strong> Gastritis, Ulcers, Pancreatitis.</li>
        <li><strong>Lower Right:</strong> Appendicitis.</li>
        <li><strong>Lower Left:</strong> Diverticulitis, IBS.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">Red Flags</h3>
      <p class="mb-4">Seek immediate care if pain is sudden and severe, accompanied by vomiting blood, bloody stools, or difficulty breathing.</p>
    `
  },
  {
    id: 14,
    title: "Stomach Ulcers: Causes, Symptoms, and Treatment",
    excerpt: "Peptic ulcers are open sores that develop on the inside lining of your stomach. Read about H. pylori, stress, and effective cures.",
    date: "April 25, 2024",
    category: "Stomach",
    image: ulcerImg,
    content: `
      <p class="mb-4">Stomach ulcers, also known as gastric ulcers, are painful sores in the stomach lining. They are a type of peptic ulcer disease.</p>
      
      <h3 class="text-xl font-bold mb-2">What Causes Ulcers?</h3>
      <p class="mb-4">Contrary to popular belief, spicy food doesn't cause ulcers (though it can worsen them). The two most common causes are:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>H. pylori infection:</strong> A common bacteria that damages the mucous coating of the stomach.</li>
        <li><strong>NSAIDs:</strong> Long-term use of aspirin, ibuprofen, and naproxen sodium.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">Symptoms & Warning Signs</h3>
      <p class="mb-4">The most common symptom is burning stomach pain. Other signs include feeling full, bloating, intolerance to fatty foods, and nausea.</p>
      
      <h3 class="text-xl font-bold mb-2">Treatment</h3>
      <p class="mb-4">Treatment typically involves antibiotics to kill H. pylori and medications (PPIs) to reduce stomach acid, allowing your stomach to heal.</p>
    `
  },
  {
    id: 15,
    title: "Jaundice: Understanding the Yellow Warning Sign",
    excerpt: "Jaundice isn't a disease itself, but a symptom of an underlying problem. Learn about bilirubin, liver function, and treatment.",
    date: "May 2, 2024",
    category: "Liver Health",
    image: jaundiceImg,
    content: `
      <p class="mb-4">Jaundice is a condition in which the skin, whites of the eyes, and mucous membranes turn yellow because of a high level of bilirubin, a yellow-orange bile pigment.</p>
      
      <h3 class="text-xl font-bold mb-2">Why does it happen?</h3>
      <p class="mb-4">It occurs when the liver cannot effectively process red blood cells as they break down. It can be caused by:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Hepatitis:</strong> Viral infections that inflame the liver.</li>
        <li><strong>Alcoholic Liver Disease:</strong> Damage from long-term alcohol use.</li>
        <li><strong>Gallstones:</strong> Blocking the bile duct.</li>
        <li><strong>Tumors:</strong> Obstructing the bile flow.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">When to see a doctor?</h3>
      <p class="mb-4">Jaundice in adults always requires medical evaluation to determine the underlying cause. Treatment depends entirely on diagnosing the specific liver or bile duct issue.</p>
    `
  }
];
