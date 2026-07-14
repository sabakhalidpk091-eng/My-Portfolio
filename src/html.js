!DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Saba Khalid — Full Stack Developer</title>
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
            <style>
                :root{
                    --bg:#05070d; --bg2:#080c16; --card:#0d1220; --card2:#131a2c; --border:#1c2740;
                --cyan:#22d3ee; --cyan2:#67e8f9; --purple:#8b5cf6; --purple2:#a78bfa;
                --text:#eef2f8; --muted:#8b96ac; --dim:#4b566e; --green:#34d399; --amber:#fbbf24;
}
                *,*::before,*::after{box - sizing:border-box;margin:0;padding:0;}
                html{scroll - behavior:smooth;}
                body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;min-height:100vh;overflow-x:hidden;}
                ::-webkit-scrollbar{width:5px;} ::-webkit-scrollbar-track{background:var(--bg);} ::-webkit-scrollbar-thumb{background:var(--cyan);border-radius:3px;}
                h1,h2,h3,.font-display{font - family:'Space Grotesk',sans-serif;}
                .mono{font - family:'Fira Code',monospace;}
                a{color:inherit;text-decoration:none;}
                button{cursor:pointer;}

                body::before{
                    content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
                background-image:radial-gradient(circle at 15% 8%, rgba(34,211,238,0.10) 0%, transparent 45%),
                radial-gradient(circle at 85% 20%, rgba(139,92,246,0.08) 0%, transparent 40%),
                linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
                background-size:auto,auto,42px 42px,42px 42px;
}
                .wrap{position:relative;z-index:1;min-height:100vh;display:flex;flex-direction:column;}

                /* NAV */
                nav{position:sticky;top:0;z-index:100;background:rgba(5,7,13,0.85);backdrop-filter:blur(14px);border-bottom:1px solid var(--border);}
                .nav-inner{max - width:1180px;margin:0 auto;padding:0 28px;height:64px;display:flex;align-items:center;justify-content:space-between;}
                .logo{display:flex;align-items:center;gap:10px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1rem;cursor:pointer;}
                .logo-mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--cyan),var(--purple));display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:800;color:#05070d;}
                .logo-sub{display:block;font-size:0.62rem;color:var(--dim);font-weight:500;letter-spacing:0.08em;margin-top:1px;}
                .nav-links{display:flex;gap:6px;}
                .nav-links button{padding:8px 14px;border-radius:9px;font-size:0.83rem;font-weight:500;color:var(--muted);transition:all .2s;background:none;border:none;font-family:inherit;display:flex;align-items:center;gap:7px;}
                .nav-links button:hover{color:var(--text);}
                .nav-links button.active{color:var(--cyan2);background:var(--card2);border:1px solid var(--border);font-weight:600;}
                .nav-right{display:flex;align-items:center;gap:12px;}
                .theme-btn{width:36px;height:36px;border-radius:9px;background:var(--card2);border:1px solid var(--border);color:var(--text);font-size:0.9rem;display:flex;align-items:center;justify-content:center;transition:all .2s;}
                .theme-btn:hover{border - color:var(--cyan);}
                .nav-cta{padding:9px 18px;border-radius:9px;background:linear-gradient(135deg,var(--cyan),#0ea5c9);color:#031018;font-weight:700;font-size:0.82rem;border:none;font-family:inherit;display:flex;align-items:center;gap:6px;}
                @media(max-width:780px){.nav - links{display:none;}}

                main{flex:1;}
                .page{display:none;}
                .page.active{display:block;animation:fadeIn .35s ease;}
                @keyframes fadeIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}

                /* HERO */
                .hero{max - width:1180px;margin:0 auto;padding:76px 28px 20px;display:grid;grid-template-columns:1.1fr 0.9fr;gap:50px;align-items:center;}
                @media(max-width:900px){.hero{grid - template - columns:1fr;padding-top:48px;}}
                .eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:0.72rem;font-weight:600;letter-spacing:0.1em;color:var(--cyan2);text-transform:uppercase;margin-bottom:18px;padding:6px 12px;border:1px solid rgba(34,211,238,0.25);border-radius:20px;background:rgba(34,211,238,0.05);}
                .eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulse 2s infinite;}
                @keyframes pulse{0 %, 100 % { opacity: 1; }50%{opacity:0.3;}}
                .hero h1{font - size:3.1rem;font-weight:700;line-height:1.08;margin-bottom:18px;}
                .hero h1 .accent{background:linear-gradient(135deg,var(--cyan),var(--purple2));-webkit-background-clip:text;background-clip:text;color:transparent;}
                @media(max-width:560px){.hero h1{font - size:2.2rem;}}
                .hero p{font - size:0.98rem;color:var(--muted);line-height:1.75;max-width:520px;margin-bottom:30px;}
                .hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:26px;}
                .btn-primary{padding:13px 24px;border-radius:10px;background:linear-gradient(135deg,var(--cyan),#0ea5c9);color:#031018;font-weight:700;font-size:0.88rem;display:inline-flex;align-items:center;gap:8px;transition:all .2s;border:none;cursor:pointer;font-family:inherit;}
                .btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(34,211,238,0.3);}
                .btn-ghost{padding:13px 24px;border-radius:10px;border:1px solid var(--border);color:var(--text);font-weight:600;font-size:0.88rem;display:inline-flex;align-items:center;gap:8px;transition:all .2s;background:transparent;cursor:pointer;font-family:inherit;}
                .btn-ghost:hover{border - color:var(--purple);color:var(--purple2);}
                .hero-loc{font - size:0.8rem;color:var(--dim);display:flex;align-items:center;gap:6px;}

                .term{background:var(--card);border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,0.5);}
                .term-bar{display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border);background:var(--card2);}
                .term-dot{width:10px;height:10px;border-radius:50%;}
                .term-title{margin - left:8px;font-size:0.72rem;color:var(--dim);}
                .term-body{padding:20px 22px;font-family:'Fira Code',monospace;font-size:0.82rem;line-height:1.9;}
                .term-body .c1{color:var(--purple2);} .term-body .c2{color:var(--cyan2);} .term-body .c3{color:var(--green);} .term-body .c4{color:var(--muted);} .term-body .cy{color:#fbbf24;}
                .term-cursor{display:inline-block;width:7px;height:14px;background:var(--cyan);animation:blink 1s step-end infinite;vertical-align:middle;}
                @keyframes blink{0 %, 50 % { opacity: 1; }51%,100%{opacity:0;}}
                .stack-pills{display:flex;flex-wrap:wrap;gap:8px;padding:16px 22px 20px;border-top:1px solid var(--border);}
                .pill{font - size:0.68rem;font-weight:600;padding:4px 10px;border-radius:20px;background:rgba(139,92,246,0.1);color:var(--purple2);border:1px solid rgba(139,92,246,0.22);}

                /* STUDIO WORKSPACE */
                .studio-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:10px;}
                .studio-head h2{font - size:1.5rem;font-weight:700;display:flex;align-items:center;gap:10px;}
                .studio-live{font - size:0.75rem;font-weight:700;color:var(--green);display:flex;align-items:center;gap:6px;}
                .studio-live .bar{display:inline-flex;gap:2px;align-items:flex-end;height:12px;}
                .studio-live .bar span{width:2px;background:var(--green);animation:barwave 1s ease-in-out infinite;}
                .studio-live .bar span:nth-child(1){height:5px;animation-delay:0s;}
                .studio-live .bar span:nth-child(2){height:10px;animation-delay:.15s;}
                .studio-live .bar span:nth-child(3){height:7px;animation-delay:.3s;}
                @keyframes barwave{0 %, 100 % { transform: scaleY(0.5); }50%{transform:scaleY(1);}}
                .studio-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:0;background:var(--card);border:1px solid var(--border);border-radius:16px;overflow:hidden;}
                @media(max-width:860px){.studio - grid{grid - template - columns:1fr;}}
                .editor-pane{border - right:1px solid var(--border);}
                @media(max-width:860px){.editor - pane{border - right:none;border-bottom:1px solid var(--border);}}
                .editor-tabs{display:flex;border-bottom:1px solid var(--border);background:var(--card2);}
                .editor-tab{padding:11px 18px;font-size:0.76rem;font-family:'Fira Code',monospace;color:var(--dim);border-right:1px solid var(--border);display:flex;align-items:center;gap:6px;}
                .editor-tab.active{color:var(--cyan2);background:var(--card);font-weight:600;}
                .editor-code{padding:20px 22px;font-family:'Fira Code',monospace;font-size:0.82rem;line-height:1.85;overflow-x:auto;}
                .editor-code .ln{display:flex;gap:18px;}
                .editor-code .lnum{color:var(--dim);user-select:none;width:16px;text-align:right;flex-shrink:0;}
                .editor-code .k1{color:var(--purple2);} .editor-code .k2{color:var(--cyan2);} .editor-code .k3{color:var(--green);} .editor-code .k4{color:var(--muted);} .editor-code .k5{color:#ec4899;} .editor-code .kcursor{display:inline-block;width:6px;height:13px;background:var(--cyan);animation:blink 1s step-end infinite;vertical-align:middle;}
                .editor-foot{display:flex;justify-content:space-between;padding:9px 18px;font-size:0.68rem;color:var(--dim);border-top:1px solid var(--border);background:var(--card2);}
                .term-pane{padding:20px 22px;display:flex;flex-direction:column;}
                .term-pane-head{display:flex;align-items:center;gap:8px;font-size:0.78rem;font-weight:700;color:var(--muted);margin-bottom:20px;}
                .term-pane-head .dots{display:flex;gap:5px;margin-right:8px;}
                .term-pane-head .dots span{width:9px;height:9px;border-radius:50%;}
                .compile-row{display:flex;align-items:center;gap:12px;margin-bottom:18px;}
                .compile-icon{width:36px;height:36px;border-radius:9px;background:rgba(139,92,246,0.14);color:var(--purple2);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}
                .compile-txt b{font - size:0.86rem;display:block;}
                .compile-txt span{font - size:0.72rem;color:var(--dim);}
                .wave-box{background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:16px;display:flex;align-items:flex-end;justify-content:center;gap:5px;height:60px;margin-bottom:18px;}
                .wave-box span{width:6px;background:linear-gradient(180deg,var(--cyan),var(--purple));border-radius:2px;animation:wavebar 1.2s ease-in-out infinite;}
                .wave-box span:nth-child(1){height:18px;animation-delay:0s;} .wave-box span:nth-child(2){height:32px;animation-delay:.1s;} .wave-box span:nth-child(3){height:44px;animation-delay:.2s;} .wave-box span:nth-child(4){height:26px;animation-delay:.3s;} .wave-box span:nth-child(5){height:38px;animation-delay:.4s;} .wave-box span:nth-child(6){height:20px;animation-delay:.5s;} .wave-box span:nth-child(7){height:30px;animation-delay:.6s;}
                @keyframes wavebar{0 %, 100 % { transform: scaleY(0.6); }50%{transform:scaleY(1);}}
                .deploy-row{margin - bottom:auto;}
                .deploy-row .dtop{display:flex;align-items:center;gap:10px;font-size:0.82rem;font-weight:600;margin-bottom:10px;}
                .deploy-row .dtop .di{width:30px;height:30px;border-radius:8px;background:rgba(34,211,238,0.12);color:var(--cyan2);display:flex;align-items:center;justify-content:center;font-size:0.85rem;}
                .deploy-line{height:2px;background:var(--border);position:relative;overflow:hidden;border-radius:2px;}
                .deploy-line::after{content:'';position:absolute;left:0;top:0;height:100%;width:60%;background:linear-gradient(90deg,var(--cyan),var(--purple));animation:deployslide 2.4s ease-in-out infinite;}
                @keyframes deployslide{0 % { left: -60 %; }100%{left:100%;}}
                .success-block{text - align:center;padding-top:26px;}
                .success-block .rocket{font - size:1.8rem;margin-bottom:10px;display:inline-block;animation:floaty 2.4s ease-in-out infinite;}
                @keyframes floaty{0 %, 100 % { transform: translateY(0); }50%{transform:translateY(-6px);}}
                .success-block .stxt{font - size:1rem;font-weight:800;color:var(--green);letter-spacing:0.04em;margin-bottom:4px;}
                .success-block .stime{font - size:0.72rem;color:var(--dim);}

                section{max - width:1180px;margin:0 auto;padding:50px 28px;}
                .sec-head{margin - bottom:34px;}
                .sec-eyebrow{display:inline-block;font-size:0.68rem;font-weight:700;letter-spacing:0.12em;color:var(--cyan2);text-transform:uppercase;margin-bottom:12px;padding:4px 12px;border:1px solid rgba(34,211,238,0.25);border-radius:20px;background:rgba(34,211,238,0.05);}
                .sec-head h2{font - size:1.9rem;font-weight:700;}
                .sec-head p{color:var(--muted);font-size:0.9rem;margin-top:8px;max-width:560px;}
                .page-title{max - width:1180px;margin:0 auto;padding:56px 28px 0;}
                .page-title h1{font - size:2.4rem;font-weight:700;}

                .cta-banner{max - width:1180px;margin:20px auto 0;padding:56px 28px;text-align:center;}
                .cta-banner h2{font - size:2.1rem;font-weight:700;margin-bottom:22px;}
                .cta-banner h2 .accent{background:linear-gradient(135deg,var(--cyan),var(--purple2));-webkit-background-clip:text;background-clip:text;color:transparent;}
                @media(max-width:560px){.cta - banner h2{font - size:1.6rem;}}

                /* ABOUT: philosophy card */
                .philo-card{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:34px;}
                .philo-card h3{font - size:1.1rem;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:10px;}
                .philo-card h3 .ic{width:32px;height:32px;border-radius:9px;background:rgba(34,211,238,0.12);color:var(--cyan2);display:flex;align-items:center;justify-content:center;font-size:0.95rem;}
                .philo-card p{color:var(--muted);font-size:0.92rem;line-height:1.9;margin-bottom:26px;}
                .tag-cloud{display:flex;flex-wrap:wrap;gap:10px;}
                .tag-pill{font - size:0.78rem;font-weight:600;padding:7px 14px;border-radius:20px;background:var(--card2);color:var(--cyan2);border:1px solid var(--border);display:inline-flex;align-items:center;gap:6px;transition:all .2s;}
                .tag-pill:hover{border - color:var(--cyan);transform:translateY(-1px);}
                .tag-pill .star{color:var(--purple2);font-size:0.7rem;}

                /* Experience */
                .exp-card{background:var(--card);border:1px solid var(--border);border-radius:16px;display:grid;grid-template-columns:200px 1fr;overflow:hidden;}
                @media(max-width:700px){.exp - card{grid - template - columns:1fr;}}
                .exp-side{padding:26px;border-right:1px solid var(--border);}
                @media(max-width:700px){.exp - side{border - right:none;border-bottom:1px solid var(--border);}}
                .exp-date{font - size:0.8rem;font-weight:700;color:var(--cyan2);font-family:'Fira Code',monospace;margin-bottom:10px;}
                .exp-org{font - size:0.82rem;color:var(--muted);display:flex;align-items:center;gap:6px;}
                .exp-main{padding:26px 28px;}
                .exp-main h4{font - size:1.05rem;font-weight:700;margin-bottom:14px;display:flex;align-items:center;gap:8px;}
                .exp-main ul{padding - left:0;list-style:none;display:flex;flex-direction:column;gap:10px;}
                .exp-main li{font - size:0.85rem;color:var(--muted);line-height:1.6;display:flex;gap:10px;}
                .exp-main li::before{content:'◆';color:var(--purple2);font-size:0.6rem;margin-top:5px;flex-shrink:0;}

                /* Education / certs */
                .edu-card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:22px;display:flex;gap:16px;align-items:flex-start;}
                .edu-icon{width:42px;height:42px;border-radius:10px;background:rgba(139,92,246,0.12);color:var(--purple2);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;}
                .edu-card h4{font - size:0.95rem;font-weight:700;margin-bottom:4px;}
                .edu-card .sub{font - size:0.82rem;color:var(--muted);margin-bottom:3px;}
                .edu-card .meta{font - size:0.75rem;color:var(--dim);}

                .cert-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;}
                @media(max-width:700px){.cert - grid{grid - template - columns:1fr;}}
                .cert-card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px;}
                .cert-card .top{display:flex;gap:12px;align-items:flex-start;margin-bottom:12px;}
                .cert-icon{width:38px;height:38px;border-radius:9px;background:rgba(34,211,238,0.12);color:var(--cyan2);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}
                .cert-card h4{font - size:0.9rem;font-weight:700;margin-bottom:3px;}
                .cert-card .org{font - size:0.78rem;color:var(--muted);}
                .cert-status{display:inline-block;font-size:0.65rem;font-weight:700;padding:3px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:0.04em;}
                .cert-status.done{background:rgba(52,211,153,0.12);color:var(--green);border:1px solid rgba(52,211,153,0.25);}
                .cert-status.wip{background:rgba(251,191,36,0.12);color:var(--amber);border:1px solid rgba(251,191,36,0.25);}

                /* Communication skills */
                .lang-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
                @media(max-width:820px){.lang - grid{grid - template - columns:1fr 1fr;}}
                @media(max-width:560px){.lang - grid{grid - template - columns:1fr;}}
                .lang-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;}
                .lang-top{display:flex;align-items:center;gap:14px;margin-bottom:18px;}
                .lang-icon{width:46px;height:46px;border-radius:10px;background:var(--card2);color:var(--cyan2);display:flex;align-items:center;justify-content:center;font-size:1.2rem;}
                .lang-card h4{font - size:1.05rem;font-weight:700;}
                .lang-meta{display:flex;justify-content:space-between;font-size:0.78rem;color:var(--muted);margin-bottom:8px;}
                .lang-meta b{color:var(--cyan2);}
                .lang-bar{height:6px;background:var(--card2);border-radius:4px;overflow:hidden;}
                .lang-bar div{height:100%;background:linear-gradient(90deg,var(--cyan),var(--purple));}

                /* SKILLS (home) */
                .skills-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
                @media(max-width:900px){.skills - grid{grid - template - columns:repeat(2,1fr);}}
                @media(max-width:520px){.skills - grid{grid - template - columns:1fr;}}
                .skill-card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:22px;transition:border-color .2s,transform .2s;}
                .skill-card:hover{border - color:rgba(34,211,238,0.35);transform:translateY(-3px);}
                .skill-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;font-size:1.1rem;}
                .skill-icon.cyan{background:rgba(34,211,238,0.12);color:var(--cyan2);}
                .skill-icon.purple{background:rgba(139,92,246,0.12);color:var(--purple2);}
                .skill-card h4{font - size:0.9rem;font-weight:700;margin-bottom:10px;}
                .skill-list{display:flex;flex-direction:column;gap:6px;}
                .skill-list span{font - size:0.76rem;color:var(--muted);display:flex;align-items:center;gap:6px;}
                .skill-list span::before{content:'';width:4px;height:4px;background:var(--dim);border-radius:50%;flex-shrink:0;}

                /* PROJECTS PAGE — thumbnail style cards */
                .proj-list{display:flex;flex-direction:column;gap:22px;}
                .proj-card2{background:var(--card);border:1px solid var(--border);border-radius:18px;overflow:hidden;display:grid;grid-template-columns:280px 1fr;transition:all .25s;}
                @media(max-width:820px){.proj - card2{grid - template - columns:1fr;}}
                .proj-card2:hover{border - color:rgba(34,211,238,0.3);box-shadow:0 20px 50px rgba(0,0,0,0.35);}
                .proj-thumb2{position:relative;padding:20px;display:flex;flex-direction:column;justify-content:space-between;min-height:220px;}
                .proj-thumb2::after{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;}
                .thumb-top-row{display:flex;justify-content:space-between;align-items:flex-start;position:relative;z-index:1;}
                .thumb-badge{font - size:0.65rem;font-weight:700;padding:3px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:0.05em;background:rgba(255,255,255,0.12);color:#fff;backdrop-filter:blur(4px);}
                .thumb-status{font - size:0.65rem;font-weight:700;padding:3px 10px;border-radius:20px;text-transform:uppercase;background:rgba(52,211,153,0.18);color:#d1fae5;}
                .thumb-center{position:relative;z-index:1;background:rgba(5,7,13,0.55);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:18px;text-align:center;margin:auto 0;}
                .thumb-center .em{font - size:1.6rem;margin-bottom:8px;}
                .thumb-center .nm{font - weight:700;font-size:0.95rem;color:#fff;}
                .thumb-center .sub{font - size:0.66rem;color:rgba(255,255,255,0.65);letter-spacing:0.06em;text-transform:uppercase;margin-top:2px;}

                .proj-body2{padding:26px 28px;display:flex;flex-direction:column;}
                .proj-year2{font - size:0.75rem;color:var(--cyan2);font-family:'Fira Code',monospace;margin-bottom:6px;}
                .proj-body2 h3{font - size:1.25rem;font-weight:700;margin-bottom:12px;}
                .proj-body2 p{font - size:0.87rem;color:var(--muted);line-height:1.8;margin-bottom:18px;flex:1;}
                .proj-tags2{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;}
                .proj-tag2{font - size:0.68rem;font-weight:700;padding:4px 10px;border-radius:6px;background:var(--card2);color:var(--muted);border:1px solid var(--border);letter-spacing:0.03em;text-transform:uppercase;}
                .proj-foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:16px;flex-wrap:wrap;gap:10px;}
                .proj-hint{font - size:0.72rem;color:var(--dim);display:flex;align-items:center;gap:6px;padding:6px 12px;border:1px solid var(--border);border-radius:8px;}
                .proj-view{font - size:0.82rem;font-weight:700;color:var(--cyan2);display:flex;align-items:center;gap:6px;}

                /* CONTACT */
                .contact-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:24px;}
                @media(max-width:860px){.contact - grid{grid - template - columns:1fr;}}
                .contact-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:22px;margin-bottom:16px;display:flex;align-items:center;gap:16px;transition:border-color .2s;}
                .contact-card:hover{border - color:rgba(34,211,238,0.3);}
                .contact-icon{width:44px;height:44px;border-radius:10px;background:rgba(34,211,238,0.1);color:var(--cyan2);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;}
                .contact-lbl{font - size:0.7rem;color:var(--dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:3px;}
                .contact-val{font - size:0.95rem;font-weight:700;}
                .avail-card{background:linear-gradient(135deg,rgba(34,211,238,0.08),rgba(139,92,246,0.06));border:1px solid rgba(34,211,238,0.2);border-radius:16px;padding:24px;}
                .avail-card h4{font - size:1rem;font-weight:700;margin-bottom:8px;}
                .avail-card p{font - size:0.84rem;color:var(--muted);line-height:1.7;}
                .avail-tag{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:0.78rem;font-weight:700;color:var(--green);}

                .form-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px;}
                .form-head{display:flex;align-items:center;gap:8px;font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--purple2);margin-bottom:22px;}
                .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
                @media(max-width:520px){.form - row{grid - template - columns:1fr;}}
                .f-field label{font - size:0.72rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:0.05em;display:flex;align-items:center;gap:6px;margin-bottom:6px;}
                .f-field input,.f-field textarea{width:100%;background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:11px 14px;color:var(--text);font-size:0.86rem;font-family:inherit;outline:none;transition:border-color .2s;}
                .f-field input:focus,.f-field textarea:focus{border - color:var(--cyan);box-shadow:0 0 0 3px rgba(34,211,238,0.1);}
                .f-field textarea{min - height:110px;resize:vertical;}
                .f-field{margin - bottom:14px;}
                .send-btn{width:100%;padding:14px;border:none;border-radius:10px;background:linear-gradient(135deg,var(--cyan),#0ea5c9);color:#031018;font-weight:700;font-size:0.9rem;cursor:pointer;font-family:inherit;transition:all .2s;letter-spacing:0.02em;}
                .send-btn:hover{box - shadow:0 10px 30px rgba(34,211,238,0.3);}

                /* FOOTER */
                footer{border - top:1px solid var(--border);margin-top:20px;}
                .footer-inner{max - width:1180px;margin:0 auto;padding:44px 28px 26px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:36px;}
                @media(max-width:760px){.footer - inner{grid - template - columns:1fr;gap:28px;}}
                .footer-brand .logo{margin - bottom:14px;}
                .footer-brand p{font - size:0.85rem;color:var(--muted);line-height:1.7;max-width:340px;margin-bottom:16px;}
                .footer-badge{display:inline-flex;align-items:center;gap:6px;font-size:0.7rem;font-weight:700;padding:5px 12px;border-radius:20px;border:1px solid rgba(52,211,153,0.3);color:var(--green);background:rgba(52,211,153,0.08);}
                .footer-col h5{font - size:0.72rem;font-weight:700;letter-spacing:0.1em;color:var(--dim);text-transform:uppercase;margin-bottom:16px;}
                .footer-col a,.footer-col button{display:block;background:none;border:none;font-family:inherit;text-align:left;padding:0;margin-bottom:12px;font-size:0.85rem;color:var(--muted);font-weight:500;transition:color .2s;}
                .footer-col a:hover,.footer-col button:hover{color:var(--cyan2);}
                .footer-col .flink{display:flex;align-items:center;gap:8px;}
                .footer-bottom{border - top:1px solid var(--border);}
                .footer-bottom-inner{max - width:1180px;margin:0 auto;padding:18px 28px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
                .footer-bottom p{font - size:0.75rem;color:var(--dim);}

                .toast-wrap{position:fixed;bottom:22px;right:22px;z-index:300;}
                .toast{background:var(--card2);border:1px solid var(--border);border-radius:10px;padding:12px 18px;font-size:0.84rem;font-weight:500;display:flex;align-items:center;gap:10px;box-shadow:0 8px 24px rgba(0,0,0,0.4);animation:toastIn .3s ease;}
                @keyframes toastIn{from{transform:translateX(100%);opacity:0;}to{transform:translateX(0);opacity:1;}}
            </style>
        </head>
        <body>
            <div class="wrap">

                <nav>
                    <div class="nav-inner">
                        <div class="logo" onclick="showPage('home')">
                            <div class="logo-mark">SK</div>
                            <div><span>Saba Khalid</span><span class="logo-sub">FULL STACK DEVELOPER</span></div>
                        </div>
                        <div class="nav-links" id="navLinks">
                            <button data-page="home" onclick="showPage('home')" class="active">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                Home
                            </button>
                            <button data-page="about" onclick="showPage('about')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                About
                            </button>
                            <button data-page="projects" onclick="showPage('projects')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                Projects
                            </button>
                            <button data-page="contact" onclick="showPage('contact')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                Contact
                            </button>
                        </div>
                        <div class="nav-right">
                            <button class="theme-btn" id="themeBtn" onclick="toggleTheme()">☀️</button>
                            <button class="nav-cta" onclick="showPage('contact')">📨 Hire</button>
                        </div>
                    </div>
                </nav>

                <main>

                    <!-- ═══ HOME PAGE ═══ -->
                    <div class="page active" id="page-home">
                        <div class="hero">
                            <div>
                                <div class="eyebrow"><span class="dot"></span> Available for freelance & remote roles</div>
                                <h1>Building full-stack products that feel <span class="accent">production-ready</span>.</h1>
                                <p>Full-stack developer based in Rawalpindi, Pakistan, focused on shipping real-world web apps — from real estate platforms to CRMs and HR systems — using React, FastAPI, and Supabase. I care about the details that make a demo feel like a product, not a prototype.</p>
                                <div class="hero-btns">
                                    <button class="btn-primary" onclick="showPage('projects')">View Projects →</button>
                                    <button class="btn-ghost" onclick="showPage('contact')">Get in Touch</button>
                                </div>
                                <div class="hero-loc">📍 Rawalpindi, Pakistan</div>
                            </div>
                            <div class="term">
                                <div class="term-bar">
                                    <div class="term-dot" style="background:#ef4444"></div>
                                    <div class="term-dot" style="background:#f59e0b"></div>
                                    <div class="term-dot" style="background:#22c55e"></div>
                                    <div class="term-title mono">developer.json</div>
                                </div>
                                <div class="term-body">
                                    <div><span class="c4">const</span> <span class="c2">developer</span> <span class="c4">=</span> {</div>
                                    <div>&nbsp;&nbsp;<span class="c1">name:</span> <span class="c3">"Saba Khalid"</span>,</div>
                                    <div>&nbsp;&nbsp;<span class="c1">role:</span> <span class="c3">"Full Stack Developer"</span>,</div>
                                    <div>&nbsp;&nbsp;<span class="c1">stack:</span> [<span class="c3">"React"</span>, <span class="c3">"FastAPI"</span>,</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c3">"Supabase"</span>, <span class="c3">"PostgreSQL"</span>],</div>
                                    <div>&nbsp;&nbsp;<span class="c1">status:</span> <span class="cy">"open_to_work"</span><span class="term-cursor"></span></div>
                                    <div>};</div>
                                </div>
                                <div class="stack-pills">
                                    <span class="pill">React / Vite</span>
                                    <span class="pill">FastAPI</span>
                                    <span class="pill">Supabase</span>
                                    <span class="pill">PostgreSQL</span>
                                    <span class="pill">Tailwind CSS</span>
                                    <span class="pill">Vercel</span>
                                </div>
                            </div>
                        </div>

                        <section id="studio">
                            <div class="studio-head">
                                <h2>🖥️ Studio Workspace</h2>
                                <div class="studio-live"><span class="bar"><span></span><span></span><span></span></span> Live Build</div>
                            </div>
                            <div class="studio-grid">
                                <div class="editor-pane">
                                    <div class="editor-tabs">
                                        <div class="editor-tab active">📄 portfolio.tsx</div>
                                        <div class="editor-tab">📄 api.js</div>
                                    </div>
                                    <div class="editor-code">
                                        <div class="ln"><span class="lnum">1</span><span><span class="k1">import</span> <span class="k4">React</span> <span class="k1">from</span> <span class="k3">"react"</span>;</span></div>
                                        <div class="ln"><span class="lnum">2</span><span></span></div>
                                        <div class="ln"><span class="lnum">3</span><span><span class="k1">export const</span> <span class="k2">Developer</span> <span class="k4">= () =></span> {</span></div>
                                        <div class="ln"><span class="lnum">4</span><span>&nbsp;&nbsp;<span class="k1">const</span> <span class="k2">skills</span> <span class="k4">=</span> [</span></div>
                                        <div class="ln"><span class="lnum">5</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k3">"React.js"</span>, <span class="k3">"FastAPI"</span>,</span></div>
                                        <div class="ln"><span class="lnum">6</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k3">"Supabase"</span>, <span class="k3">"PostgreSQL"</span></span></div>
                                        <div class="ln"><span class="lnum">7</span><span>&nbsp;&nbsp;];</span></div>
                                        <div class="ln"><span class="lnum">8</span><span>&nbsp;&nbsp;<span class="k1">return</span> (</span></div>
                                        <div class="ln"><span class="lnum">9</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k5">&lt;App</span> <span class="k4">available</span><span class="k4">=</span>{<span class="k1">true</span>} <span class="k5">/></span></div>
                                        <div class="ln"><span class="lnum">10</span><span>&nbsp;&nbsp;)<span class="kcursor"></span></span></div>
                                        <div class="ln"><span class="lnum">11</span><span>}</span></div>
                                    </div>
                                    <div class="editor-foot"><span>FOCUS: <b style="color:var(--muted)">FULL STACK DEVELOPMENT</b></span><span>UTF-8 · REACT MAIN</span></div>
                                </div>
                                <div class="term-pane">
                                    <div class="term-pane-head"><span class="dots"><span style="background:#ef4444"></span><span style="background:#f59e0b"></span><span style="background:#22c55e"></span></span> COMPILER TERMINAL</div>
                                    <div class="compile-row">
                                        <div class="compile-icon">📦</div>
                                        <div class="compile-txt"><b>Compiling Project</b><span>...</span></div>
                                    </div>
                                    <div class="wave-box"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
                                    <div class="deploy-row">
                                        <div class="dtop"><span class="di">☁️</span> Cloud Deployment</div>
                                        <div class="deploy-line"></div>
                                    </div>
                                    <div class="success-block">
                                        <div class="rocket">🚀</div>
                                        <div class="stxt">SUCCESS</div>
                                        <div class="stime" id="deployTime">Service deployed</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="skills">
                            <div class="sec-head">
                                <div class="sec-eyebrow">Toolkit</div>
                                <h2>Skills & Technologies</h2>
                                <p>The stack I reach for when turning a plan into a working product.</p>
                            </div>
                            <div class="skills-grid">
                                <div class="skill-card">
                                    <div class="skill-icon cyan">🎨</div>
                                    <h4>Frontend</h4>
                                    <div class="skill-list"><span>React.js / Vite</span><span>JavaScript (ES6+)</span><span>Tailwind CSS</span><span>Responsive Design</span></div>
                                </div>
                                <div class="skill-card">
                                    <div class="skill-icon purple">⚙️</div>
                                    <h4>Backend</h4>
                                    <div class="skill-list"><span>FastAPI</span><span>REST API Design</span><span>Auth & Role-Based Routing</span><span>Python</span></div>
                                </div>
                                <div class="skill-card">
                                    <div class="skill-icon cyan">🗄️</div>
                                    <h4>Database & Cloud</h4>
                                    <div class="skill-list"><span>Supabase</span><span>PostgreSQL</span><span>Vercel Deployment</span><span>Environment Config</span></div>
                                </div>
                                <div class="skill-card">
                                    <div class="skill-icon purple">🛠️</div>
                                    <h4>Tools & Workflow</h4>
                                    <div class="skill-list"><span>Git / GitHub</span><span>AI-Assisted Development</span><span>Structured Prompt Planning</span><span>Squarespace (Client Sites)</span></div>
                                </div>
                            </div>
                        </section>

                        <div class="cta-banner">
                            <h2>Ready for an <span class="accent">epic</span> build?</h2>
                            <button class="btn-primary" onclick="showPage('contact')">Hire Me Now 🚀</button>
                        </div>
                    </div>

                    <!-- ═══ ABOUT PAGE ═══ -->
                    <div class="page" id="page-about">
                        <div class="page-title"><h1>My Background</h1></div>

                        <section>
                            <div class="philo-card">
                                <h3><span class="ic">🛡️</span> Philosophy & Focus</h3>
                                <p>Full-stack developer with hands-on experience building and deploying production-feeling web applications. I plan projects with structured prompts before implementation, then push hard on the details — real data flows, working auth, no placeholder shortcuts — until the result matches professional product standards, not a simplified demo. Comfortable owning a project end-to-end: frontend, backend, database, and deployment.</p>
                                <div class="tag-cloud">
                                    <span class="tag-pill"><span class="star">★</span> React.js</span>
                                    <span class="tag-pill"><span class="star">★</span> Vite</span>
                                    <span class="tag-pill"><span class="star">★</span> JavaScript (ES6+)</span>
                                    <span class="tag-pill"><span class="star">★</span> Tailwind CSS</span>
                                    <span class="tag-pill"><span class="star">★</span> FastAPI</span>
                                    <span class="tag-pill"><span class="star">★</span> REST API Design</span>
                                    <span class="tag-pill"><span class="star">★</span> JWT Auth</span>
                                    <span class="tag-pill"><span class="star">★</span> Role-Based Access Control</span>
                                    <span class="tag-pill"><span class="star">★</span> Supabase</span>
                                    <span class="tag-pill"><span class="star">★</span> PostgreSQL</span>
                                    <span class="tag-pill"><span class="star">★</span> SQLAlchemy</span>
                                    <span class="tag-pill"><span class="star">★</span> Vercel Deployment</span>
                                    <span class="tag-pill"><span class="star">★</span> Git & GitHub</span>
                                    <span class="tag-pill"><span class="star">★</span> Flutter (Mobile)</span>
                                    <span class="tag-pill"><span class="star">★</span> Squarespace</span>
                                    <span class="tag-pill"><span class="star">★</span> Prompt Engineering</span>
                                    <span class="tag-pill"><span class="star">★</span> AI-Assisted Development</span>
                                    <span class="tag-pill"><span class="star">★</span> Responsive Design</span>
                                </div>
                            </div>
                        </section>

                        <section id="experience">
                            <div class="sec-head">
                                <div class="sec-eyebrow">Career</div>
                                <h2>Professional Experience</h2>
                            </div>
                            <div class="exp-card">
                                <div class="exp-side">
                                    <div class="exp-date">2025 – Present</div>
                                    <div class="exp-org">💼 Freelance / Independent</div>
                                </div>
                                <div class="exp-main">
                                    <h4>🎓 Full Stack Developer</h4>
                                    <ul>
                                        <li>Designed and shipped multiple production-feeling full-stack apps (LuxeEstate, ByteCRM, HRM Suite) using React, FastAPI, and Supabase</li>
                                        <li>Planned each build with structured prompts before handing off implementation to AI coding agents, then refined until it matched real product standards</li>
                                        <li>Delivered client work under tight deadlines, including a bilingual (EN/ES) Squarespace site with WCAG accessibility for a Florida-based client</li>
                                        <li>Handled deployment, environment configuration, and GitHub App permissions across multiple Vercel projects</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div class="sec-head">
                                <div class="sec-eyebrow">Learning</div>
                                <h2>Academic Foundation</h2>
                            </div>
                            <div class="edu-card">
                                <div class="edu-icon">📖</div>
                                <div>
                                    <h4>Your Degree Here</h4>
                                    <div class="sub">Your University Name</div>
                                    <div class="meta">Add your graduation years & city — editable placeholder</div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div class="sec-head">
                                <div class="sec-eyebrow">Achievements</div>
                                <h2>Certifications & Recognition</h2>
                                <p>Placeholder cards — swap in your real certifications, or remove this section entirely.</p>
                            </div>
                            <div class="cert-grid">
                                <div class="cert-card">
                                    <div class="top">
                                        <div class="cert-icon">🏅</div>
                                        <div><h4>Your Certification Name</h4><div class="org">Issuing Organization</div></div>
                                    </div>
                                    <span class="cert-status wip">In Progress</span>
                                </div>
                                <div class="cert-card">
                                    <div class="top">
                                        <div class="cert-icon">🏆</div>
                                        <div><h4>Another Certification</h4><div class="org">Issuing Organization</div></div>
                                    </div>
                                    <span class="cert-status done">Completed</span>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div class="sec-head">
                                <div class="sec-eyebrow">Global</div>
                                <h2>Communication Skills</h2>
                            </div>
                            <div class="lang-grid">
                                <div class="lang-card">
                                    <div class="lang-top"><div class="lang-icon">🌐</div><h4>English</h4></div>
                                    <div class="lang-meta"><span>Professional</span><b>90%</b></div>
                                    <div class="lang-bar"><div style="width:90%"></div></div>
                                </div>
                                <div class="lang-card">
                                    <div class="lang-top"><div class="lang-icon">🌐</div><h4>Urdu</h4></div>
                                    <div class="lang-meta"><span>Native</span><b>100%</b></div>
                                    <div class="lang-bar"><div style="width:100%"></div></div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <!-- ═══ PROJECTS PAGE ═══ -->
                    <div class="page" id="page-projects">
                        <div class="page-title"><h1>Featured Projects</h1></div>
                        <section>
                            <div class="sec-head"><p>Products built end-to-end — planned, prompted, and shipped.</p></div>
                            <div class="proj-list">

                                <div class="proj-card2">
                                    <div class="proj-thumb2" style="background:linear-gradient(135deg,#0f2e2b,#0a1f3a);">
                                        <div class="thumb-top-row">
                                            <span class="thumb-badge">Web</span>
                                            <span class="thumb-status">Live</span>
                                        </div>
                                        <div class="thumb-center"><div class="em">🏠</div><div class="nm">LuxeEstate</div><div class="sub">Real Estate Platform</div></div>
                                    </div>
                                    <div class="proj-body2">
                                        <div class="proj-year2">2026</div>
                                        <h3>LuxeEstate — Real Estate Portfolio</h3>
                                        <p>Full-stack real estate platform built to Zameen.com / Zillow standard — real listings, working auth flows, and a search experience that doesn't feel like a stripped-down portfolio demo. Planned via structured prompts, implemented with an AI coding agent.</p>
                                        <div class="proj-tags2"><span class="proj-tag2">React</span><span class="proj-tag2">Vite</span><span class="proj-tag2">FastAPI</span><span class="proj-tag2">Supabase</span></div>
                                        <div class="proj-foot">
                                            <span class="proj-hint">👆 Click card for details</span>
                                            <a class="proj-view" href="#">View Live ↗</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="proj-card2">
                                    <div class="proj-thumb2" style="background:linear-gradient(135deg,#1a1030,#0a1f3a);">
                                        <div class="thumb-top-row">
                                            <span class="thumb-badge">SaaS</span>
                                            <span class="thumb-status">Live</span>
                                        </div>
                                        <div class="thumb-center"><div class="em">📊</div><div class="nm">ByteCRM</div><div class="sub">CRM System</div></div>
                                    </div>
                                    <div class="proj-body2">
                                        <div class="proj-year2">2026</div>
                                        <h3>ByteCRM — Customer Relationship Manager</h3>
                                        <p>Full-stack CRM deployed to Vercel with a FastAPI backend and Vite frontend, handling client tracking, lead pipelines, and environment-configured deployments across separate services.</p>
                                        <div class="proj-tags2"><span class="proj-tag2">React</span><span class="proj-tag2">FastAPI</span><span class="proj-tag2">Vercel</span></div>
                                        <div class="proj-foot">
                                            <span class="proj-hint">👆 Click card for details</span>
                                            <a class="proj-view" href="#">View Live ↗</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="proj-card2">
                                    <div class="proj-thumb2" style="background:linear-gradient(135deg,#2b1a0a,#0a1f3a);">
                                        <div class="thumb-top-row">
                                            <span class="thumb-badge">HR Tech</span>
                                            <span class="thumb-status" style="background:rgba(251,191,36,0.18);color:#fef3c7;">In Progress</span>
                                        </div>
                                        <div class="thumb-center"><div class="em">🧑‍💼</div><div class="nm">HRM Suite</div><div class="sub">HR Platform</div></div>
                                    </div>
                                    <div class="proj-body2">
                                        <div class="proj-year2">2025</div>
                                        <h3>HRM Suite — Commercial HR Platform</h3>
                                        <p>Full HR management system built for commercial sale, with a Flutter mobile companion. Covers employee profiles, attendance, leave management, payroll, and salary slips, plus premium modules for recruitment and document storage.</p>
                                        <div class="proj-tags2"><span class="proj-tag2">FastAPI</span><span class="proj-tag2">Flutter</span><span class="proj-tag2">PostgreSQL</span></div>
                                        <div class="proj-foot">
                                            <span class="proj-hint">👆 Click card for details</span>
                                            <a class="proj-view" href="#">GitHub ↗</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="proj-card2">
                                    <div class="proj-thumb2" style="background:linear-gradient(135deg,#0a1f3a,#1a1030);">
                                        <div class="thumb-top-row">
                                            <span class="thumb-badge">Web</span>
                                            <span class="thumb-status">Completed</span>
                                        </div>
                                        <div class="thumb-center"><div class="em">🎓</div><div class="nm">CareerPath</div><div class="sub">Counselling App</div></div>
                                    </div>
                                    <div class="proj-body2">
                                        <div class="proj-year2">2025</div>
                                        <h3>Career Counselling Platform</h3>
                                        <p>Profile-based career guidance platform with authentication and personalized recommendation flows, built as part of an earlier full-stack portfolio project.</p>
                                        <div class="proj-tags2"><span class="proj-tag2">React</span><span class="proj-tag2">REST API</span></div>
                                        <div class="proj-foot">
                                            <span class="proj-hint">👆 Click card for details</span>
                                            <a class="proj-view" href="#">GitHub ↗</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>

                    <!-- ═══ CONTACT PAGE ═══ -->
                    <div class="page" id="page-contact">
                        <div class="page-title"><h1>Start a Conversation</h1></div>
                        <section>
                            <div class="contact-grid">
                                <div>
                                    <div class="contact-card">
                                        <div class="contact-icon">✉️</div>
                                        <div><div class="contact-lbl">Email Me</div><div class="contact-val">your.email@example.com</div></div>
                                    </div>
                                    <div class="contact-card">
                                        <div class="contact-icon">💬</div>
                                        <div><div class="contact-lbl">WhatsApp</div><div class="contact-val">+92 3XX XXXXXXX</div></div>
                                    </div>
                                    <div class="avail-card">
                                        <h4>Open for Freelance & Remote Roles</h4>
                                        <p>Looking for a full-stack developer who ships production-quality work and sweats the details? Let's talk.</p>
                                        <div class="avail-tag">🟢 Available Now</div>
                                    </div>
                                </div>
                                <div class="form-card">
                                    <div class="form-head">✨ Direct Message</div>
                                    <div class="form-row">
                                        <div class="f-field"><label>👤 Full Name</label><input type="text" placeholder="John Doe" /></div>
                                        <div class="f-field"><label>@ Email Address</label><input type="text" placeholder="john@example.com" /></div>
                                    </div>
                                    <div class="f-field"><label>📄 Subject</label><input type="text" placeholder="Project Inquiry" /></div>
                                    <div class="f-field"><label>💬 Your Message</label><textarea placeholder="Tell me about your vision..."></textarea></div>
                                    <button class="send-btn" onclick="showToast()">Dispatch Message →</button>
                                </div>
                            </div>
                        </section>
                    </div>

                </main>

                <!-- ═══ FOOTER (persistent, same on every page) ═══ -->
                <footer>
                    <div class="footer-inner">
                        <div class="footer-brand">
                            <div class="logo"><div class="logo-mark">SK</div><div><span>Saba Khalid</span><span class="logo-sub">FULL STACK DEVELOPER</span></div></div>
                            <p>Crafting production-feeling full-stack products with precision engineering and a full-stack skillset. Let's build something real together.</p>
                            <span class="footer-badge">✓ Verified Developer</span>
                        </div>
                        <div class="footer-col">
                            <h5>Navigation</h5>
                            <button onclick="showPage('home')">Home</button>
                            <button onclick="showPage('about')">About</button>
                            <button onclick="showPage('projects')">Projects</button>
                            <button onclick="showPage('contact')">Contact</button>
                        </div>
                        <div class="footer-col">
                            <h5>Connect</h5>
                            <a class="flink" href="mailto:your.email@example.com">✉️ Email</a>
                            <a class="flink" href="#">💬 WhatsApp</a>
                            <a class="flink" href="#">🔗 LinkedIn</a>
                            <a class="flink" href="#">⌥ GitHub</a>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-bottom-inner">
                            <p>Made with ❤️ by Saba Khalid</p>
                            <p>© 2026 Saba Khalid · Full Stack Developer</p>
                        </div>
                    </div>
                </footer>

            </div>

            <div class="toast-wrap" id="toastWrap"></div>
            <script>
                function showPage(id){
                    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links button').forEach(b => b.classList.toggle('active', b.dataset.page === id));
                window.scrollTo({top:0, behavior:'smooth'});
}
                function toggleTheme(){
  const btn = document.getElementById('themeBtn');
                document.body.classList.toggle('light-preview');
                btn.textContent = document.body.classList.contains('light-preview') ? '🌙' : '☀️';
}
                const dt = document.getElementById('deployTime');
                if(dt){dt.textContent = 'Service deployed at ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }); }
                function showToast(){
  const wrap = document.getElementById('toastWrap');
                const t = document.createElement('div');
                t.className = 'toast';
                t.innerHTML = '✅ Message ready — connect a backend to send it for real.';
                wrap.appendChild(t);
  setTimeout(()=>t.remove(), 3500);
}
            </script>
        </body>
    </html>