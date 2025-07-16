export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on niche and outline and give me result in rich text editor format.',
        slug: 'generate-blog-title',
        form: [
            { label: 'Enter your blog niche', field: 'input', name: 'niche', required: 'true' },
            { label: 'Enter blog outline', field: 'textarea', name: 'outline' }
        ]
    },
    {
        name: 'SEO Meta Description',
        desc: 'Generates an SEO-friendly meta description for your blog or website.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674978.png',
        aiPrompt: 'Generate an SEO-optimized meta description for the following content and niche:',
        slug: 'seo-meta-description',
        form: [
            { label: 'Enter content or summary', field: 'textarea', name: 'content', required: 'true' },
            { label: 'Enter niche or topic', field: 'input', name: 'niche' }
        ]
    },
    {
        name: 'Social Media Captions',
        desc: 'Creates engaging captions for Instagram, LinkedIn, or Twitter posts.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/16683/16683173.png',
        aiPrompt: 'Generate 3 engaging social media captions for the given platform and content. Keep tone fun and trendy.',
        slug: 'social-media-caption',
        form: [
            { label: 'Choose platform (Instagram, LinkedIn, etc)', field: 'input', name: 'platform', required: 'true' },
            { label: 'Enter post content or theme', field: 'textarea', name: 'content' }
        ]
    },
    {
        name: 'Email Subject Line Generator',
        desc: 'Get high-converting email subject lines based on your message.',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/3178/3178283.png',
        aiPrompt: 'Generate 5 email subject lines based on the given email content and target audience.',
        slug: 'email-subject-line',
        form: [
            { label: 'Enter email summary or message', field: 'textarea', name: 'emailContent', required: 'true' },
            { label: 'Target audience or product', field: 'input', name: 'audience' }
        ]
    },
    {
        name: 'Product Description Writer',
        desc: 'Generates persuasive and SEO-friendly product descriptions.',
        category: 'E-Commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/3314/3314461.png',
        aiPrompt: 'Write a product description for the given product name and features in bullet format. Use persuasive language and include SEO keywords.',
        slug: 'product-description-writer',
        form: [
            { label: 'Product name', field: 'input', name: 'productName', required: 'true' },
            { label: 'Product features (comma separated)', field: 'textarea', name: 'features' }
        ]
    },
    {
        name: 'Ad Copy Generator',
        desc: 'Creates ad copies for Google, Facebook, or Instagram campaigns.',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920259.png',
        aiPrompt: 'Generate 3 ad copy ideas for the given product and target audience. Include a call to action.',
        slug: 'ad-copy-generator',
        form: [
            { label: 'Product/service name', field: 'input', name: 'product', required: 'true' },
            { label: 'Target audience', field: 'input', name: 'audience' },
            { label: 'Ad platform (Google, Facebook, etc)', field: 'input', name: 'platform' }
        ]
    },
    {
        name: 'Landing Page Hero Text',
        desc: 'Generates attention-grabbing hero section text for landing pages.',
        category: 'Website',
        icon: 'https://cdn-icons-png.flaticon.com/128/9536/9536635.png',
        aiPrompt: 'Write hero section title and subtitle for a landing page based on the product and its benefits.',
        slug: 'landing-page-hero',
        form: [
            { label: 'Product or service name', field: 'input', name: 'productName', required: 'true' },
            { label: 'List 2–3 key benefits', field: 'textarea', name: 'benefits' }
        ]
    },
    {
        name: 'Cold Email Writer',
        desc: 'Creates professional cold emails for outreach or sales.',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/1041/1041916.png',
        aiPrompt: 'Write a cold email introducing my product or service to the given recipient. Keep it concise and formal.',
        slug: 'cold-email-writer',
        form: [
            { label: 'Recipient profession or company', field: 'input', name: 'recipient', required: 'true' },
            { label: 'What are you offering?', field: 'textarea', name: 'offer' }
        ]
    },
    {
        name: 'Hashtag Generator',
        desc: 'Suggests trending and relevant hashtags for your posts.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1006/1006771.png',
        aiPrompt: 'Generate 10 relevant and trending hashtags for the given content and platform.',
        slug: 'hashtag-generator',
        form: [
            { label: 'Content or caption', field: 'textarea', name: 'caption', required: 'true' },
            { label: 'Platform (e.g., Instagram, LinkedIn)', field: 'input', name: 'platform' }
        ]
    },
    {
        name: 'Quote Generator',
        desc: 'Creates motivational, educational, or funny quotes based on your topic.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/4974/4974983.png',
        aiPrompt: 'Generate 3 original quotes based on the given theme. Keep it unique and sharable.',
        slug: 'quote-generator',
        form: [
            { label: 'Enter theme or topic (e.g., success, education)', field: 'input', name: 'theme', required: 'true' }
        ]
    },
    {
        name: 'Document Summarizer',
        desc: 'Summarizes long documents into concise bullet points or paragraphs.',
        category: 'Document',
        icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828817.png',
        aiPrompt: 'Summarize the following document content into bullet points.',
        slug: 'document-summarizer',
        form: [
            { label: 'Paste document content', field: 'textarea', name: 'docContent', required: 'true' }
        ]
    },
    {
        name: 'Resume Writer',
        desc: 'Generates a tailored resume summary based on your experience and target role.',
        category: 'Document',
        icon: 'https://cdn-icons-png.flaticon.com/128/281/281760.png',
        aiPrompt: 'Write a professional resume summary for the following experience and job role.',
        slug: 'resume-writer',
        form: [
            { label: 'Your experience summary', field: 'textarea', name: 'experience', required: 'true' },
            { label: 'Target job role', field: 'input', name: 'role' }
        ]
    },
    {
        name: 'Cover Letter Generator',
        desc: 'Creates personalized cover letters based on your resume and job role.',
        category: 'Document',
        icon: 'https://cdn-icons-png.flaticon.com/128/3141/3141444.png',
        aiPrompt: 'Generate a professional cover letter using this resume content and job title.',
        slug: 'cover-letter-generator',
        form: [
            { label: 'Paste your resume or profile info', field: 'textarea', name: 'resume', required: 'true' },
            { label: 'Job title or role', field: 'input', name: 'jobTitle' }
        ]
    },
    {
        name: 'Code Snippet Generator',
        desc: 'Generates code snippets in various languages for common tasks.',
        category: 'Code',
        icon: 'https://cdn-icons-png.flaticon.com/128/138/138281.png',
        aiPrompt: 'Generate a code snippet to perform the following task in the specified language.',
        slug: 'code-snippet-generator',
        form: [
            { label: 'Describe the task (e.g., sort array)', field: 'textarea', name: 'task', required: 'true' },
            { label: 'Programming language', field: 'input', name: 'language' }
        ]
    },
    {
        name: 'Bug Fix Suggestion',
        desc: 'Analyzes buggy code and suggests fixes with explanations.',
        category: 'Code',
        icon: 'https://cdn-icons-png.flaticon.com/128/3481/3481218.png',
        aiPrompt: 'Identify the bug in this code and provide a corrected version with explanation.',
        slug: 'bug-fix-suggester',
        form: [
            { label: 'Paste your buggy code', field: 'textarea', name: 'buggyCode', required: 'true' },
            { label: 'Programming language', field: 'input', name: 'language' }
        ]
    },
    {
        name: 'Regex Generator',
        desc: 'Creates regex expressions based on your description.',
        category: 'Code',
        icon: 'https://cdn-icons-png.flaticon.com/128/4248/4248443.png',
        aiPrompt: 'Generate a regular expression that matches this pattern or rule.',
        slug: 'regex-generator',
        form: [
            { label: 'Describe your pattern (e.g., 10-digit phone)', field: 'textarea', name: 'pattern', required: 'true' }
        ]
    }
]
