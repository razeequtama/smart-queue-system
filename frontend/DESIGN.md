# DESIGN.md

<!-- extraction-meta
source: Figma file "Untitled"
scope: entire file (1 page)
date: 2026-05-14
nodes-scanned: 985
confidence: { extracted: 100%, inferred: 0%, known: 0% }
-->

## 1. Identity

**In one line:** A design system using Inria Sans, K2D, Inter with 34 unique colors extracted directly from Figma.

**Signature Techniques:**
- Consistent auto-layout spacing system
- Rounded shape language (12px+ radii)

## 2. Structure

High-level composition of the design, extracted from Figma pages and top-level frames. Each entry shows the frame name, type, dimensions, and auto-layout direction.

### Page: Page 1

_16 top-level frame(s)_

- **-------------- SKETCH // GUIDE ----------** · `FRAME` · 100×100

- **------------ COMPONENTS ------------** · `FRAME` · 100×100

- **5. User - Main Menu - Log** · `FRAME` · 1440×1024 · 16 children
  - **Container - Header** · `RECTANGLE` · 1440×135
  - **Container - Sidebar** · `RECTANGLE` · 306×1024
  - **Buttons - Sidebar** · `GROUP` · 306×889 · 8 children
    - **Button - Log Out** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Log out** · `GROUP` · 189×39 · 2 children
      - **Log out** · `TEXT` · 154×39 · “Log out”
      - **Group** · `GROUP` · 20×20 · 1 children
        - _...and 1 more_
    - **Button - Log** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 2 children
        - _...and 2 more_
    - **Text - Log** · `GROUP` · 189×39 · 2 children
      - **Log** · `TEXT` · 154×39 · “Log”
      - **octicon:log-16** · `FRAME` · 20×20 · 2 children
        - _...and 2 more_
    - **Button - Make Queue** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Make Queue** · `GROUP` · 191×39 · 2 children
      - **Make Queue** · `TEXT` · 154×39 · “Make Queue”
      - **ic:outline-queue** · `FRAME` · 24×24 · 1 children
        - _...and 1 more_
    - **Button - Dashboard** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Dashboard** · `GROUP` · 195×39 · 2 children
      - **dinkie-icons:windows** · `FRAME` · 25×25 · 1 children
        - _...and 1 more_
      - **Dashboard** · `TEXT` · 154×39 · “Dashboard”
  - **Logo - Image** · `FRAME` · 122×122 · 2 children
    - **Vector** · `VECTOR` · 61×61
    - **Line 1** · `LINE`
  - **Logo - Text** · `TEXT` · 171×44 · “SimpleHouse”
  - **Container - Profile** · `GROUP` · 262×135 · 2 children
    - **Container - Header** · `RECTANGLE` · 262×135
    - **Profile** · `GROUP` · 183×69 · 4 children
      - **Burhan** · `TEXT` · 83×36 · “Burhan”
      - **08XX-XXXX-XXXX** · `TEXT` · 102×19 · “08XX-XXXX-XXXX”
      - **burhan@gmail.com** · `TEXT` · 113×19 · “burhan@gmail.com”
      - **Profile - Icon** · `FRAME` · 56×56 · 1 children
        - _...and 1 more_
  - **Icon - Messages** · `GROUP` · 55×59 · 2 children
    - **Messages - Icon** · `FRAME` · 55×55 · 1 children
      - **Vector** · `VECTOR` · 47×47
    - **Ellipse 22** · `ELLIPSE` · 26×26
  - **Icon - Notification** · `GROUP` · 61×61 · 2 children
    - **Notification - Icon** · `FRAME` · 58×58 · 1 children
      - **Vector** · `VECTOR` · 47×53
    - **Ellipse 21** · `ELLIPSE` · 26×26
  - **Container - Queue** · `GROUP` · 1024×648 · 5 children
    - **Rectangle 21** · `RECTANGLE` · 1024×648
    - **Container - Row Header** · `GROUP` · 1024×481 · 9 children
      - **Rectangle 25** · `RECTANGLE` · 1024×481
      - **Rectangle 26** · `RECTANGLE` · 1024×72
      - **Rectangle 27** · `RECTANGLE` · 97×72
      - **Rectangle 24** · `RECTANGLE` · 170×72
      - **Rectangle 28** · `RECTANGLE` · 174×72
      - **Rectangle 29** · `RECTANGLE` · 259×72
      - **Rectangle 30** · `RECTANGLE` · 169×72
      - **Rectangle 31** · `RECTANGLE` · 155×72
      - **Rectangle 23** · `RECTANGLE` · 1024×481
    - **Text - Row Header** · `GROUP` · 950×36 · 6 children
      - **No.** · `TEXT` · 47×36 · “No.”
      - **DD/MM/YYYY** · `TEXT` · 125×26 · “DD/MM/YYYY”
      - **Disease** · `TEXT` · 107×36 · “Disease”
      - **Doctor Name** · `TEXT` · 176×36 · “Doctor Name”
      - **Area** · `TEXT` · 176×36 · “Area”
      - **Status** · `TEXT` · 88×36 · “Status”
    - **Container - Rows** · `GROUP` · 1024×576 · 8 children
      - **Rectangle 22** · `RECTANGLE` · 1024×72
      - **Rectangle 23** · `RECTANGLE` · 1024×72
      - **Rectangle 24** · `RECTANGLE` · 1024×72
      - **Rectangle 25** · `RECTANGLE` · 1024×72
      - **Rectangle 28** · `RECTANGLE` · 1024×72
      - **Rectangle 29** · `RECTANGLE` · 1024×72
      - **Rectangle 26** · `RECTANGLE` · 1024×72
      - **Rectangle 27** · `RECTANGLE` · 1024×72
    - **Container - Example Queue** · `GROUP` · 970×107 · 12 children
      - **Example Queue - 1.** · `TEXT` · 21×36 · “1.”
      - **Example Queue - 0002** · `TEXT` · 111×29 · “09/02/2077”
      - **Example Queue - Diabetes** · `TEXT` · 120×28 · “Zombie Virus”
      - **Example Queue - 15 Min.** · `TEXT` · 178×30 · “Jordan Belford”
      - **Example Queue - 15 Min.** · `TEXT` · 178×30 · “Pochinki”
      - **Example Queue - 15 Min.** · `TEXT` · 178×30 · “Pochinki”
      - **Example Queue - 1.** · `TEXT` · 40×36 · “2.”
      - **Example Queue - 16** · `TEXT` · 107×29 · “02/01/2077”
      - **Example Queue - Diabetes** · `TEXT` · 120×28 · “Meningitis”
      - **Example Queue - 15 Min.** · `TEXT` · 178×30 · “Tretan Muslim”
      - **Example Queue - Status** · `FRAME` · 123×36 · horizontal row, gap 10px, padding 10px · 1 children
        - _...and 1 more_
      - **Example Queue - Status** · `FRAME` · 140×36 · horizontal row, gap 10px, padding 10px · 1 children
        - _...and 1 more_
  - **Rectangle 31** · `RECTANGLE` · 792×50
  - **Rectangle 32** · `RECTANGLE` · 213×50
  - **Filter by...** · `TEXT` · 87×29 · “Filter by...”
  - _...and 4 more_

- **4. Admin - Main Menu - Navigate** · `FRAME` · 1440×1024 · 23 children
  - **Container - Header** · `RECTANGLE` · 1440×135
  - **Container - Header** · `RECTANGLE` · 1440×135
  - **Container - Profile** · `GROUP` · 262×135 · 2 children
    - **Container - Header** · `RECTANGLE` · 262×135
    - **Profile** · `GROUP` · 172×69 · 4 children
      - **Tiara** · `TEXT` · 59×36 · “Tiara”
      - **08XX-XXXX-XXXX** · `TEXT` · 102×19 · “08XX-XXXX-XXXX”
      - **Tiara@gmail.com** · `TEXT` · 101×19 · “Tiara@gmail.com”
      - **Profile - Icon** · `FRAME` · 56×56 · 1 children
        - _...and 1 more_
  - **Icon - Messages** · `GROUP` · 55×59 · 2 children
    - **Messages - Icon** · `FRAME` · 55×55 · 1 children
      - **Vector** · `VECTOR` · 47×47
    - **Ellipse 22** · `ELLIPSE` · 26×26
  - **Icon - Notification** · `GROUP` · 61×61 · 2 children
    - **Notification - Icon** · `FRAME` · 58×58 · 1 children
      - **Vector** · `VECTOR` · 47×53
    - **Ellipse 21** · `ELLIPSE` · 26×26
  - **Container - Sidebar** · `RECTANGLE` · 306×1024
  - **Buttons - Sidebar** · `GROUP` · 306×889 · 6 children
    - **Admin Main Menu Logout Buttons** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Log out** · `GROUP` · 189×39 · 2 children
      - **Log out** · `TEXT` · 154×39 · “Log out”
      - **Group** · `GROUP` · 20×20 · 1 children
        - _...and 1 more_
    - **Admin Main Menu Sidebar Buttons** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 2 children
        - _...and 2 more_
    - **Text - Dashboard** · `GROUP` · 197×39 · 2 children
      - **Navigate** · `TEXT` · 154×39 · “Navigate”
      - **oui:nav-reports** · `FRAME` · 25×25 · 1 children
        - _...and 1 more_
    - **Admin Main Menu Sidebar Buttons** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Dashboard** · `GROUP` · 195×39 · 2 children
      - **dinkie-icons:windows** · `FRAME` · 25×25 · 1 children
        - _...and 1 more_
      - **Dashboard** · `TEXT` · 154×39 · “Dashboard”
  - **Rectangle 17** · `RECTANGLE` · 306×99
  - **Logo - Image** · `FRAME` · 122×122 · 2 children
    - **Vector** · `VECTOR` · 61×61
    - **Line 1** · `LINE`
  - **Logo - Text** · `TEXT` · 171×44 · “SimpleHouse”
  - **Icon - Messages** · `GROUP` · 55×59 · 2 children
    - **Messages - Icon** · `FRAME` · 55×55 · 1 children
      - **Vector** · `VECTOR` · 47×47
    - **Ellipse 22** · `ELLIPSE` · 26×26
  - **Icon - Notification** · `GROUP` · 61×61 · 2 children
    - **Notification - Icon** · `FRAME` · 58×58 · 1 children
      - **Vector** · `VECTOR` · 47×53
    - **Ellipse 21** · `ELLIPSE` · 26×26
  - _...and 11 more_

- **3. Admin - Main Menu - Dashboard** · `FRAME` · 1440×1024 · 12 children
  - **Container - Header** · `RECTANGLE` · 1440×135
  - **Container - Sidebar** · `RECTANGLE` · 306×1024
  - **Buttons - Sidebar** · `GROUP` · 306×859 · 5 children
    - **Text - Log out** · `GROUP` · 189×39 · 2 children
      - **Log out** · `TEXT` · 154×39 · “Log out”
      - **Group** · `GROUP` · 20×20 · 1 children
        - _...and 1 more_
    - **Admin Main Menu Sidebar Buttons** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Dashboard** · `GROUP` · 197×39 · 2 children
      - **Navigate** · `TEXT` · 154×39 · “Navigate”
      - **oui:nav-reports** · `FRAME` · 25×25 · 1 children
        - _...and 1 more_
    - **Admin Main Menu Sidebar Buttons** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 2 children
        - _...and 2 more_
    - **Text - Dashboard** · `GROUP` · 195×39 · 2 children
      - **dinkie-icons:windows** · `FRAME` · 25×25 · 1 children
        - _...and 1 more_
      - **Dashboard** · `TEXT` · 154×39 · “Dashboard”
  - **Logo - Image** · `FRAME` · 122×122 · 2 children
    - **Vector** · `VECTOR` · 61×61
    - **Line 1** · `LINE`
  - **Logo - Text** · `TEXT` · 171×44 · “SimpleHouse”
  - **Container - Profile** · `GROUP` · 262×135 · 2 children
    - **Container - Header** · `RECTANGLE` · 262×135
    - **Profile** · `GROUP` · 172×69 · 4 children
      - **Tiara** · `TEXT` · 59×36 · “Tiara”
      - **08XX-XXXX-XXXX** · `TEXT` · 102×19 · “08XX-XXXX-XXXX”
      - **Tiara@gmail.com** · `TEXT` · 101×19 · “Tiara@gmail.com”
      - **Profile - Icon** · `FRAME` · 56×56 · 1 children
        - _...and 1 more_
  - **Icon - Messages** · `GROUP` · 55×59 · 2 children
    - **Messages - Icon** · `FRAME` · 55×55 · 1 children
      - **Vector** · `VECTOR` · 47×47
    - **Ellipse 22** · `ELLIPSE` · 26×26
  - **Icon - Notification** · `GROUP` · 61×61 · 2 children
    - **Notification - Icon** · `FRAME` · 58×58 · 1 children
      - **Vector** · `VECTOR` · 47×53
    - **Ellipse 21** · `ELLIPSE` · 26×26
  - **Welcome back, Tiara!** · `TEXT` · 308×45 · “Welcome back, Tiara!”
  - **Container - Main Info** · `GROUP` · 877×481 · 5 children
    - **Rectangle 21** · `RECTANGLE` · 877×481
    - **There are 979 queues made today!** · `TEXT` · 599×54 · “There are 979 queues made today!”
    - **!** · `TEXT` · 33×152 · “!”
    - **!** · `TEXT` · 25×129 · “!”
    - **clarity:list-line** · `FRAME` · 281×281 · 12 children
      - **Vector** · `VECTOR` · 70×16
      - **Vector** · `VECTOR` · 70×16
      - **Vector** · `VECTOR` · 70×16
      - **Vector** · `VECTOR` · 70×16
      - **Vector** · `VECTOR` · 70×16
      - **Vector** · `VECTOR` · 16×16
      - **Vector** · `VECTOR` · 16×16
      - **Vector** · `VECTOR` · 16×16
      - **Vector** · `VECTOR` · 16×16
      - **Vector** · `VECTOR` · 16×16
      - **Vector** · `VECTOR` · 187×250
      - **Vector** · `VECTOR` · 281×281
  - **Button - Go to Navigate** · `INSTANCE` · 877×99 · horizontal row, gap 30px, padding 23/224/22/273px · 2 children
    - **oui:nav-reports** · `FRAME` · 54×54 · 1 children
      - **Vector** · `VECTOR` · 39×49
    - **Navigate Queues** · `TEXT` · 296×54 · “Navigate Queues”
  - **Log Out Button** · `INSTANCE` · 442×100 · vertical stack, gap 10px, padding 10px · 1 children
    - **Group 11** · `GROUP` · 296×80 · 2 children
      - **Rectangle 24** · `RECTANGLE` · 296×80
      - **Log Out** · `TEXT` · 128×42 · “Log Out”

- **2. Admin - Login** · `FRAME` · 1440×1024 · 9 children
  - **Register Field** · `GROUP` · 964×692 · 3 children
    - **BG-Hover** · `INSTANCE` · 964×692 · vertical stack, gap 10px, padding 10px · 1 children
      - **Register Place** · `RECTANGLE` · 944×672
    - **Mask group** · `GROUP` · 944×672 · 2 children
      - **Register Place** · `RECTANGLE` · 944×672
      - **Register Place** · `RECTANGLE` · 590×672
    - **Register Place** · `RECTANGLE` · 944×674
  - **Clouds** · `GROUP` · 234×674 · 22 children
    - **Ellipse 18** · `ELLIPSE` · 111×112
    - **Ellipse 17** · `ELLIPSE` · 116×112
    - **Ellipse 20** · `ELLIPSE` · 111×112
    - **Ellipse 19** · `ELLIPSE` · 111×112
    - **Ellipse 1** · `ELLIPSE` · 110×118
    - **Ellipse 17** · `ELLIPSE` · 111×112
    - **Ellipse 18** · `ELLIPSE` · 111×112
    - **Ellipse 2** · `ELLIPSE` · 111×112
    - **Ellipse 15** · `ELLIPSE` · 111×112
    - **Ellipse 16** · `ELLIPSE` · 111×112
    - **Ellipse 3** · `VECTOR` · 111×112
    - **Ellipse 4** · `ELLIPSE` · 111×112
    - _...and 10 more_
  - **Checkbox** · `GROUP` · 347×29 · 2 children
    - **I agree to the terms and conditions** · `TEXT` · 314×29 · “I agree to the terms and conditions”
    - **Checkbox - Admin** · `INSTANCE` · 21×21 · horizontal row, gap 10px · 1 children
      - **Rectangle 11** · `RECTANGLE` · 21×21
  - **Password Input** · `GROUP` · 463×99 · 3 children
    - **Password** · `TEXT` · 91×29 · “Password”
    - **Rectangle 10** · `RECTANGLE` · 462×64
    - **Enter password** · `TEXT` · 140×29 · “Enter password”
  - **Email Input** · `GROUP` · 463×99 · 3 children
    - **Email** · `TEXT` · 50×29 · “Email”
    - **Rectangle 9** · `RECTANGLE` · 462×64
    - **Enter email** · `TEXT` · 101×29 · “Enter email”
  - **Header-Heavy** · `INSTANCE` · 389×58 · 1 children
    - **Create your account** · `TEXT` · 296×58 · “Welcome Back!”
  - **Logo** · `FRAME` · 521×521 · 1 children
    - **Vector** · `VECTOR` · 260×260
  - **Havent-Register Animation** · `INSTANCE` · 317×35 · vertical stack, gap 4px, padding 0/10/0/10px · 2 children
    - **Don’t have an account? Register** · `TEXT` · 297×29 · “Don’t have an account? Register”
    - **Rectangle 12** · `RECTANGLE`
  - **Button - Login & Register Length** · `INSTANCE` · 462×49 · horizontal row, gap 10px, padding 10px · 1 children
    - **Sign Up** · `TEXT` · 52×29 · “Login”

- **1. Admin - Register** · `FRAME` · 1440×1024 · 12 children
  - **Register Field** · `GROUP` · 964×692 · 3 children
    - **BG-Hover** · `INSTANCE` · 964×692 · vertical stack, gap 10px, padding 10px · 1 children
      - **Register Place** · `RECTANGLE` · 944×672
    - **Mask group** · `GROUP` · 944×672 · 2 children
      - **Register Place** · `RECTANGLE` · 944×672
      - **Register Place** · `RECTANGLE` · 590×672
    - **Register Place** · `RECTANGLE` · 944×670
  - **Clouds** · `GROUP` · 233×674 · 22 children
    - **Ellipse 18** · `ELLIPSE` · 111×112
    - **Ellipse 17** · `ELLIPSE` · 122×112
    - **Ellipse 20** · `ELLIPSE` · 111×112
    - **Ellipse 19** · `ELLIPSE` · 111×112
    - **Ellipse 1** · `ELLIPSE` · 110×116
    - **Ellipse 17** · `ELLIPSE` · 111×112
    - **Ellipse 18** · `ELLIPSE` · 111×112
    - **Ellipse 2** · `ELLIPSE` · 111×112
    - **Ellipse 15** · `ELLIPSE` · 111×112
    - **Ellipse 16** · `ELLIPSE` · 111×112
    - **Ellipse 3** · `ELLIPSE` · 111×112
    - **Ellipse 4** · `ELLIPSE` · 111×112
    - _...and 10 more_
  - **Checkbox** · `GROUP` · 314×29 · 1 children
    - **I agree to the terms and conditions** · `TEXT` · 314×29 · “I agree to the terms and conditions”
  - **Phone Number Input** · `GROUP` · 463×99 · 3 children
    - **Phone Number** · `TEXT` · 138×29 · “Phone Number”
    - **Rectangle 10** · `RECTANGLE` · 462×64
    - **Enter phone number (ex: 08XX-XXXX-XXXX)** · `TEXT` · 390×29 · “Enter phone number (ex: 08XX-XXXX-XXXX)”
  - **Password Input** · `GROUP` · 463×99 · 3 children
    - **Password** · `TEXT` · 91×29 · “Password”
    - **Rectangle 10** · `RECTANGLE` · 462×64
    - **Enter password** · `TEXT` · 140×29 · “Enter password”
  - **Email Input** · `GROUP` · 463×99 · 3 children
    - **Email** · `TEXT` · 50×29 · “Email”
    - **Rectangle 9** · `RECTANGLE` · 462×64
    - **Enter email** · `TEXT` · 101×29 · “Enter email”
  - **Full Name Input** · `GROUP` · 463×99 · 3 children
    - **Full Name** · `TEXT` · 91×29 · “Full Name”
    - **Rectangle 8** · `RECTANGLE` · 462×64
    - **Enter full name** · `TEXT` · 135×29 · “Enter full name”
  - **Header-Heavy** · `INSTANCE` · 389×58 · 1 children
    - **Create your account** · `TEXT` · 389×58 · “Create your account”
  - **Login-Already Animation** · `INSTANCE` · 316×35 · vertical stack, gap 4px, padding 0/10/0/10px · 2 children
    - **Already have an account? Log In** · `TEXT` · 296×29 · “Already have an account? Log In”
    - **Rectangle 12** · `RECTANGLE`
  - **Logo** · `FRAME` · 521×521 · 1 children
    - **Vector** · `VECTOR` · 260×260
  - **Button - Login & Register Length** · `INSTANCE` · 462×49 · horizontal row, gap 10px, padding 10px · 1 children
    - **Sign Up** · `TEXT` · 73×29 · “Sign Up”
  - **Checkbox - Admin** · `INSTANCE` · 21×21 · horizontal row, gap 10px · 1 children
    - **Rectangle 11** · `RECTANGLE` · 21×21

- **------------- ADMIN MODE ---------** · `FRAME` · 100×100

- **4. User - Main Menu - Make Queue** · `FRAME` · 1440×1024 · 15 children
  - **Container - Header** · `RECTANGLE` · 1440×135
  - **Container - Sidebar** · `RECTANGLE` · 306×1024
  - **Buttons - Sidebar** · `GROUP` · 306×889 · 8 children
    - **Button - Log Out** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Log out** · `GROUP` · 189×39 · 2 children
      - **Log out** · `TEXT` · 154×39 · “Log out”
      - **Group** · `GROUP` · 20×20 · 1 children
        - _...and 1 more_
    - **Button - Log** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Log** · `GROUP` · 189×39 · 2 children
      - **Log** · `TEXT` · 154×39 · “Log”
      - **octicon:log-16** · `FRAME` · 20×20 · 2 children
        - _...and 2 more_
    - **Button - Make Queue** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 2 children
        - _...and 2 more_
    - **Text - Make Queue** · `GROUP` · 191×39 · 2 children
      - **Make Queue** · `TEXT` · 154×39 · “Make Queue”
      - **ic:outline-queue** · `FRAME` · 24×24 · 1 children
        - _...and 1 more_
    - **Button - Dashboard** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Dashboard** · `GROUP` · 195×39 · 2 children
      - **dinkie-icons:windows** · `FRAME` · 25×25 · 1 children
        - _...and 1 more_
      - **Dashboard** · `TEXT` · 154×39 · “Dashboard”
  - **Logo - Image** · `FRAME` · 122×122 · 2 children
    - **Vector** · `VECTOR` · 61×61
    - **Line 1** · `LINE`
  - **Logo - Text** · `TEXT` · 171×44 · “SimpleHouse”
  - **Container - Profile** · `GROUP` · 262×135 · 2 children
    - **Container - Header** · `RECTANGLE` · 262×135
    - **Profile** · `GROUP` · 183×69 · 4 children
      - **Burhan** · `TEXT` · 83×36 · “Burhan”
      - **08XX-XXXX-XXXX** · `TEXT` · 102×19 · “08XX-XXXX-XXXX”
      - **burhan@gmail.com** · `TEXT` · 113×19 · “burhan@gmail.com”
      - **Profile - Icon** · `FRAME` · 56×56 · 1 children
        - _...and 1 more_
  - **Icon - Messages** · `GROUP` · 55×59 · 2 children
    - **Messages - Icon** · `FRAME` · 55×55 · 1 children
      - **Vector** · `VECTOR` · 47×47
    - **Ellipse 22** · `ELLIPSE` · 26×26
  - **Icon - Notification** · `GROUP` · 61×61 · 2 children
    - **Notification - Icon** · `FRAME` · 58×58 · 1 children
      - **Vector** · `VECTOR` · 47×53
    - **Ellipse 21** · `ELLIPSE` · 26×26
  - **Input - Specialist** · `GROUP` · 462×104 · 2 children
    - **Dropdown - Specialist** · `INSTANCE` · 462×64 · 1 children
      - **Group 3** · `GROUP` · 462×64 · 3 children
        - _...and 3 more_
    - **Specialist** · `TEXT` · 90×29 · “Specialist”
  - **Input - Area** · `GROUP` · 463×102 · 2 children
    - **Area** · `TEXT` · 44×29 · “Area”
    - **Dropdown - Area** · `INSTANCE` · 462×64 · 1 children
      - **Group 3** · `GROUP` · 462×64 · 3 children
        - _...and 3 more_
  - **Input - Doctor Name** · `GROUP` · 463×99 · 4 children
    - **Look for Doctor’s Name** · `TEXT` · 215×29 · “Look for Doctor’s Name”
    - **Rectangle 9** · `RECTANGLE` · 462×64
    - **Doctor’s name** · `TEXT` · 129×29 · “Doctor’s name”
    - **material-symbols:search** · `FRAME` · 41×41 · 1 children
      - **Vector** · `VECTOR` · 31×31
  - **Input - Day** · `GROUP` · 463×102 · 2 children
    - **Day** · `TEXT` · 36×29 · “Day”
    - **Dropdown - Days** · `INSTANCE` · 462×64 · 1 children
      - **Group 3** · `GROUP` · 462×64 · 3 children
        - _...and 3 more_
  - _...and 3 more_

- **3. User - Main Menu - Dashboard - Some Queue** · `FRAME` · 1440×1024 · 15 children
  - **Container - Header** · `RECTANGLE` · 1440×135
  - **Container - Sidebar** · `RECTANGLE` · 306×1024
  - **Logo - Image** · `FRAME` · 122×122 · 2 children
    - **Vector** · `VECTOR` · 61×61
    - **Line 1** · `LINE`
  - **Logo - Text** · `TEXT` · 171×44 · “SimpleHouse”
  - **Container - Profile** · `GROUP` · 262×135 · 2 children
    - **Container - Profile** · `RECTANGLE` · 262×135
    - **Profile** · `GROUP` · 183×69 · 4 children
      - **Burhan** · `TEXT` · 83×36 · “Burhan”
      - **08XX-XXXX-XXXX** · `TEXT` · 102×19 · “08XX-XXXX-XXXX”
      - **burhan@gmail.com** · `TEXT` · 113×19 · “burhan@gmail.com”
      - **Profile - Icon** · `FRAME` · 56×56 · 1 children
        - _...and 1 more_
  - **Icon - Messages** · `GROUP` · 55×59 · 2 children
    - **Messages - Icon** · `FRAME` · 55×55 · 1 children
      - **Vector** · `VECTOR` · 47×47
    - **Ellipse 22** · `ELLIPSE` · 26×26
  - **Icon - Notification** · `GROUP` · 61×61 · 2 children
    - **Notification - Icon** · `FRAME` · 58×58 · 1 children
      - **Vector** · `VECTOR` · 47×53
    - **Ellipse 21** · `ELLIPSE` · 26×26
  - **Button - View Log** · `INSTANCE` · 442×152 · vertical stack, gap 10px, padding 10px · 1 children
    - **Rectangle 24** · `RECTANGLE` · 422×132
  - **Text - View Log** · `GROUP` · 316×62 · 2 children
    - **View Log** · `TEXT` · 268×62 · “View Log”
    - **octicon:log-16** · `FRAME` · 31×31 · 2 children
      - **Vector** · `VECTOR` · 14×9
      - **Vector** · `VECTOR` · 31×31
  - **Button - Make Queue** · `INSTANCE` · 442×152 · vertical stack, gap 10px, padding 10px · 1 children
    - **Rectangle 24** · `RECTANGLE` · 422×132
  - **Text - Make Queue** · `GROUP` · 325×62 · 2 children
    - **Make Queue** · `TEXT` · 268×62 · “Make Queue”
    - **ic:outline-queue** · `FRAME` · 35×35 · 1 children
      - **Vector** · `VECTOR` · 29×29
  - **Container - Queue** · `GROUP` · 877×504 · 5 children
    - **Rectangle 21** · `RECTANGLE` · 877×504
    - **Container - Row Header** · `GROUP` · 877×481 · 8 children
      - **Rectangle 25** · `RECTANGLE` · 877×481
      - **Rectangle 26** · `RECTANGLE` · 877×72
      - **Rectangle 27** · `RECTANGLE` · 83×72
      - **Rectangle 24** · `RECTANGLE` · 146×72
      - **Rectangle 28** · `RECTANGLE` · 222×72
      - **Rectangle 29** · `RECTANGLE` · 222×72
      - **Rectangle 30** · `RECTANGLE` · 205×72
      - **Rectangle 23** · `RECTANGLE` · 877×481
    - **Text - Row Header** · `GROUP` · 790×36 · 5 children
      - **No.** · `TEXT` · 40×36 · “No.”
      - **Queue ID** · `TEXT` · 107×36 · “Queue ID”
      - **Disease** · `TEXT` · 92×36 · “Disease”
      - **Estimation** · `TEXT` · 122×36 · “Estimation”
      - **Status** · `TEXT` · 75×36 · “Status”
    - **Container - Rows** · `GROUP` · 877×432 · 6 children
      - **Rectangle 22** · `RECTANGLE` · 877×72
      - **Rectangle 23** · `RECTANGLE` · 877×72
      - **Rectangle 24** · `RECTANGLE` · 877×72
      - **Rectangle 25** · `RECTANGLE` · 877×72
      - **Rectangle 26** · `RECTANGLE` · 877×72
      - **Rectangle 27** · `RECTANGLE` · 877×72
    - **Container - Example Queue** · `GROUP` · 798×36 · 5 children
      - **Example Queue - 1.** · `TEXT` · 18×36 · “1.”
      - **Example Queue - 0002** · `TEXT` · 63×36 · “0002”
      - **Example Queue - Diabetes** · `TEXT` · 103×36 · “Diabetes”
      - **Example Queue - 15 Min.** · `TEXT` · 82×36 · “15 Min.”
      - **Example Queue - Status** · `FRAME` · 105×36 · horizontal row, gap 10px, padding 10px · 1 children
        - _...and 1 more_
  - _...and 3 more_

- **3. User - Main Menu - Dashboard - No Queue** · `FRAME` · 1440×1024 · 15 children
  - **Container - Header** · `RECTANGLE` · 1440×135
  - **Container - Sidebar** · `RECTANGLE` · 306×1024
  - **Buttons - Sidebar** · `GROUP` · 307×889 · 9 children
    - **Button - Log Out** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Rectangle 34** · `RECTANGLE` · 307×100
    - **Text - Log out** · `GROUP` · 189×39 · 2 children
      - **Log out** · `TEXT` · 154×39 · “Log out”
      - **Group** · `GROUP` · 20×20 · 1 children
        - _...and 1 more_
    - **Button - Log** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Log** · `GROUP` · 189×39 · 2 children
      - **Log** · `TEXT` · 154×39 · “Log”
      - **octicon:log-16** · `FRAME` · 20×20 · 2 children
        - _...and 2 more_
    - **Button - Make Queue** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Make Queue** · `GROUP` · 191×39 · 2 children
      - **Make Queue** · `TEXT` · 154×39 · “Make Queue”
      - **ic:outline-queue** · `FRAME` · 24×24 · 1 children
        - _...and 1 more_
    - **Button - Dashboard** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 2 children
        - _...and 2 more_
    - **Text - Dashboard** · `GROUP` · 195×39 · 2 children
      - **dinkie-icons:windows** · `FRAME` · 25×25 · 1 children
        - _...and 1 more_
      - **Dashboard** · `TEXT` · 154×39 · “Dashboard”
  - **Logo - Image** · `FRAME` · 122×122 · 2 children
    - **Vector** · `VECTOR` · 61×61
    - **Line 1** · `LINE`
  - **Logo - Text** · `TEXT` · 171×44 · “SimpleHouse”
  - **Empty Queue** · `GROUP` · 877×481 · 4 children
    - **Rectangle 21** · `RECTANGLE` · 877×481
    - **Add a queue to see your consultation’s hour.** · `TEXT` · 446×36 · “Add a queue to see your consultation’s hour.”
    - **You have no registered queue** · `TEXT` · 511×54 · “You have no registered queue”
    - **lets-icons:paper-light** · `FRAME` · 317×317 · 3 children
      - **Group** · `GROUP` · 238×238 · 2 children
        - _...and 2 more_
      - **?** · `TEXT` · 46×120 · “?”
      - **?** · `TEXT` · 26×73 · “?”
  - **Button - View Log** · `INSTANCE` · 442×152 · vertical stack, gap 10px, padding 10px · 1 children
    - **Rectangle 24** · `RECTANGLE` · 422×132
  - **Text - View Log** · `GROUP` · 316×62 · 2 children
    - **View Log** · `TEXT` · 268×62 · “View Log”
    - **octicon:log-16** · `FRAME` · 31×31 · 2 children
      - **Vector** · `VECTOR` · 14×9
      - **Vector** · `VECTOR` · 31×31
  - **Button - Make Queue** · `INSTANCE` · 442×152 · vertical stack, gap 10px, padding 10px · 1 children
    - **Rectangle 24** · `RECTANGLE` · 422×132
  - **Text - Make Queue** · `GROUP` · 325×62 · 2 children
    - **Make Queue** · `TEXT` · 268×62 · “Make Queue”
    - **ic:outline-queue** · `FRAME` · 35×35 · 1 children
      - **Vector** · `VECTOR` · 29×29
  - **Container - Profile** · `GROUP` · 262×135 · 2 children
    - **Container - Header** · `RECTANGLE` · 262×135
    - **Profile** · `GROUP` · 183×69 · 4 children
      - **Burhan** · `TEXT` · 83×36 · “Burhan”
      - **08XX-XXXX-XXXX** · `TEXT` · 102×19 · “08XX-XXXX-XXXX”
      - **burhan@gmail.com** · `TEXT` · 113×19 · “burhan@gmail.com”
      - **Profile - Icon** · `FRAME` · 56×56 · 1 children
        - _...and 1 more_
  - **Icon - Messages** · `GROUP` · 55×59 · 2 children
    - **Messages - Icon** · `FRAME` · 55×55 · 1 children
      - **Vector** · `VECTOR` · 47×47
    - **Ellipse 22** · `ELLIPSE` · 26×26
  - _...and 3 more_

- **2. User - Login** · `FRAME` · 1440×1024 · 10 children
  - **Register Field** · `GROUP` · 964×692 · 3 children
    - **BG-Hover** · `INSTANCE` · 964×692 · vertical stack, gap 10px, padding 10px · 1 children
      - **Register Place** · `RECTANGLE` · 944×672
    - **Mask group** · `GROUP` · 944×672 · 2 children
      - **Register Place** · `RECTANGLE` · 944×672
      - **Register Place** · `RECTANGLE` · 590×672
    - **Register Place** · `RECTANGLE` · 944×672
  - **Clouds** · `GROUP` · 132×499 · 4 children
    - **Ellipse 20** · `ELLIPSE` · 111×112
    - **Ellipse 19** · `ELLIPSE` · 111×112
    - **Ellipse 17** · `ELLIPSE` · 111×112
    - **Ellipse 18** · `ELLIPSE` · 111×112
  - **Button - Login** · `INSTANCE` · 462×49 · horizontal row, gap 10px, padding 10px
  - **Login** · `TEXT` · 52×29 · “Login”
  - **Checkbox** · `GROUP` · 346×29 · 2 children
    - **I agree to the terms and conditions** · `TEXT` · 314×29 · “I agree to the terms and conditions”
    - **Checkbox - Terms** · `INSTANCE` · 21×21 · horizontal row, gap 10px · 1 children
      - **Rectangle 11** · `RECTANGLE` · 21×21
  - **Password Input** · `GROUP` · 463×99 · 3 children
    - **Password** · `TEXT` · 91×29 · “Password”
    - **Rectangle 10** · `RECTANGLE` · 462×64
    - **Enter password** · `TEXT` · 140×29 · “Enter password”
  - **Email Input** · `GROUP` · 463×99 · 3 children
    - **Email** · `TEXT` · 50×29 · “Email”
    - **Rectangle 9** · `RECTANGLE` · 462×64
    - **Enter email** · `TEXT` · 101×29 · “Enter email”
  - **Header-Heavy** · `INSTANCE` · 389×58 · 1 children
    - **Create your account** · `TEXT` · 296×58 · “Welcome Back!”
  - **Logo** · `FRAME` · 521×521 · 1 children
    - **Vector** · `VECTOR` · 260×260
  - **Havent-Register Animation** · `INSTANCE` · 317×35 · vertical stack, gap 4px, padding 0/10/0/10px · 2 children
    - **Don’t have an account? Register** · `TEXT` · 297×29 · “Don’t have an account? Register”
    - **Rectangle 12** · `RECTANGLE`

- **1. User - Register** · `FRAME` · 1440×1024 · 11 children
  - **Register Field** · `GROUP` · 964×692 · 3 children
    - **BG-Hover** · `INSTANCE` · 964×692 · vertical stack, gap 10px, padding 10px · 1 children
      - **Register Place** · `RECTANGLE` · 944×672
    - **Mask group** · `GROUP` · 944×672 · 2 children
      - **Register Place** · `RECTANGLE` · 944×672
      - **Register Place** · `RECTANGLE` · 590×672
    - **Register Place** · `RECTANGLE` · 944×672
  - **Checkbox** · `GROUP` · 346×29 · 2 children
    - **I agree to the terms and conditions** · `TEXT` · 314×29 · “I agree to the terms and conditions”
    - **Checkbox - Terms** · `INSTANCE` · 21×21 · horizontal row, gap 10px · 1 children
      - **Rectangle 11** · `RECTANGLE` · 21×21
  - **Phone Number Input** · `GROUP` · 463×99 · 3 children
    - **Phone Number** · `TEXT` · 138×29 · “Phone Number”
    - **Rectangle 10** · `RECTANGLE` · 462×64
    - **Enter phone number (ex: 08XX-XXXX-XXXX)** · `TEXT` · 390×29 · “Enter phone number (ex: 08XX-XXXX-XXXX)”
  - **Password Input** · `GROUP` · 463×99 · 3 children
    - **Password** · `TEXT` · 91×29 · “Password”
    - **Rectangle 10** · `RECTANGLE` · 462×64
    - **Enter password** · `TEXT` · 140×29 · “Enter password”
  - **Email Input** · `GROUP` · 463×99 · 3 children
    - **Email** · `TEXT` · 50×29 · “Email”
    - **Rectangle 9** · `RECTANGLE` · 462×64
    - **Enter email** · `TEXT` · 101×29 · “Enter email”
  - **Full Name Input** · `GROUP` · 463×99 · 3 children
    - **Full Name** · `TEXT` · 91×29 · “Full Name”
    - **Rectangle 8** · `RECTANGLE` · 462×64
    - **Enter full name** · `TEXT` · 135×29 · “Enter full name”
  - **Header-Heavy** · `INSTANCE` · 389×58 · 1 children
    - **Create your account** · `TEXT` · 389×58 · “Create your account”
  - **Login-Already Animation** · `INSTANCE` · 316×35 · vertical stack, gap 4px, padding 0/10/0/10px · 2 children
    - **Already have an account? Log In** · `TEXT` · 296×29 · “Already have an account? Log In”
    - **Rectangle 12** · `RECTANGLE`
  - **Logo** · `FRAME` · 521×521 · 1 children
    - **Vector** · `VECTOR` · 260×260
  - **Button - Login & Register Length** · `INSTANCE` · 462×49 · horizontal row, gap 10px, padding 10px
  - **Sign Up** · `TEXT` · 73×29 · “Sign Up”

- **------------ USER MODE ------------** · `FRAME` · 100×100

- **6. User - Notifications** · `FRAME` · 1440×1024 · 12 children
  - **Container - Header** · `RECTANGLE` · 1440×135
  - **Container - Sidebar** · `RECTANGLE` · 306×1024
  - **Buttons - Sidebar** · `GROUP` · 306×889 · 8 children
    - **Button - Log Out** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Log out** · `GROUP` · 189×39 · 2 children
      - **Log out** · `TEXT` · 154×39 · “Log out”
      - **Group** · `GROUP` · 20×20 · 1 children
        - _...and 1 more_
    - **Button - Log** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 2 children
        - _...and 2 more_
    - **Text - Log** · `GROUP` · 189×39 · 2 children
      - **Log** · `TEXT` · 154×39 · “Log”
      - **octicon:log-16** · `FRAME` · 20×20 · 2 children
        - _...and 2 more_
    - **Button - Make Queue** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Make Queue** · `GROUP` · 191×39 · 2 children
      - **Make Queue** · `TEXT` · 154×39 · “Make Queue”
      - **ic:outline-queue** · `FRAME` · 24×24 · 1 children
        - _...and 1 more_
    - **Button - Dashboard** · `INSTANCE` · 306×99 · vertical stack, gap 10px · 1 children
      - **Group 1** · `GROUP` · 306×99 · 1 children
        - _...and 1 more_
    - **Text - Dashboard** · `GROUP` · 195×39 · 2 children
      - **dinkie-icons:windows** · `FRAME` · 25×25 · 1 children
        - _...and 1 more_
      - **Dashboard** · `TEXT` · 154×39 · “Dashboard”
  - **Logo - Image** · `FRAME` · 122×122 · 2 children
    - **Vector** · `VECTOR` · 61×61
    - **Line 1** · `LINE`
  - **Logo - Text** · `TEXT` · 171×44 · “SimpleHouse”
  - **Container - Profile** · `GROUP` · 262×135 · 2 children
    - **Container - Header** · `RECTANGLE` · 262×135
    - **Profile** · `GROUP` · 183×69 · 4 children
      - **Burhan** · `TEXT` · 83×36 · “Burhan”
      - **08XX-XXXX-XXXX** · `TEXT` · 102×19 · “08XX-XXXX-XXXX”
      - **burhan@gmail.com** · `TEXT` · 113×19 · “burhan@gmail.com”
      - **Profile - Icon** · `FRAME` · 56×56 · 1 children
        - _...and 1 more_
  - **Icon - Messages** · `GROUP` · 55×59 · 2 children
    - **Messages - Icon** · `FRAME` · 55×55 · 1 children
      - **Vector** · `VECTOR` · 47×47
    - **Ellipse 22** · `ELLIPSE` · 26×26
  - **Icon - Notification** · `GROUP` · 62×61 · 3 children
    - **Notification - Icon** · `FRAME` · 58×58 · 1 children
      - **Vector** · `VECTOR` · 47×53
    - **carbon:notification-filled** · `FRAME` · 60×60 · 1 children
      - **Vector** · `VECTOR` · 49×54
    - **Ellipse 21** · `ELLIPSE` · 26×26
  - **Container - Rows** · `GROUP` · 1000×838 · 1 children
    - **Frame 6** · `FRAME` · 1000×838 · vertical stack, gap 14px · 11 children
      - **Rectangle 22** · `RECTANGLE` · 1000×63
      - **Rectangle 23** · `RECTANGLE` · 1000×63
      - **Rectangle 28** · `RECTANGLE` · 1000×63
      - **Rectangle 29** · `RECTANGLE` · 1000×63
      - **Rectangle 24** · `RECTANGLE` · 1000×63
      - **Rectangle 25** · `RECTANGLE` · 1000×63
      - **Rectangle 26** · `RECTANGLE` · 1000×63
      - **Rectangle 27** · `RECTANGLE` · 1000×63
      - **Rectangle 22** · `RECTANGLE` · 1000×63
      - **Rectangle 23** · `RECTANGLE` · 1000×63
      - **Rectangle 28** · `RECTANGLE` · 1000×63
  - **Check out SimpleHouse’s brand new...** · `TEXT` · 351×29 · “Check out SimpleHouse’s brand new...”
  - **09-02-2066 08:00 PM** · `TEXT` · 119×16 · “09-02-2066  08:00 PM”
  - **Log Out Button** · `INSTANCE` · 442×100 · vertical stack, gap 10px, padding 10px · 1 children
    - **Group 11** · `GROUP` · 296×80 · 2 children
      - **Rectangle 24** · `RECTANGLE` · 296×80
      - **Log Out** · `TEXT` · 128×42 · “Log Out”

_...and 1 more frame(s) on this page_

## 3. Color

### Palette
| Token | Value | Role | Usage | Similar | Source |
|-------|-------|------|-------|---------|--------|
| `background` | `#ffffff` | background | 404× | — | node |
| `accent` | `#4665ab` | accent | 28× | `#4968ad` | node |
| `border` | `#908da5` | border | 27× | `#908da4` | node |
| `accent-alt` | `#ff5d5d` | accent | 20× | — | node |
| `accent-3` | `#677fb6` | accent | 19× | — | node |
| `text-tertiary` | `#5c73a7` | text-tertiary | 15× | — | node |
| `text-primary` | `#000000` | text-primary | 14× | — | node |
| `background-alt` | `#eaf1ff` | background | 12× | — | node |
| `accent-4` | `#6a83bd` | accent | 12× | — | node |
| `accent-5` | `#b4c2e1` | accent | 11× | — | node |
| `accent-6` | `#c53939` | accent | 10× | — | node |
| `accent-7` | `#dfa124` | accent | 8× | — | node |
| `surface` | `#dde4f4` | surface | 8× | — | node |
| `accent-8` | `#849bd1` | accent | 7× | — | node |
| `surface-alt` | `#fce2e2` | surface | 7× | — | node |
| `accent-9` | `#3b599e` | accent | 6× | — | node |
| `accent-10` | `#2563eb` | accent | 6× | — | node |
| `accent-11` | `#ff883e` | accent | 6× | — | node |
| `accent-12` | `#b84040` | accent | 5× | — | node |
| `accent-13` | `#b64a4a` | accent | 4× | — | node |

_The **Similar** column lists hexes that were visually indistinguishable (Δ < 12) and collapsed into the canonical token. Use the canonical token in code; treat the similar values as the same intent._

## 4. Typography

### Fonts
- **Inria Sans**
- **K2D**
- **Inter**

### Scale
| Role | Token | Size | Weight | Line Height | Letter Spacing | Source |
|------|-------|------|--------|-------------|----------------|--------|
| Display | `display` | 105px | 600 | 145% | -0.02em | node |
| H1 | `h1` | 89px | 300 | 145% | -0.02em | node |
| H2 | `h2` | 83px | 600 | 145% | -0.02em | node |
| H3 | `h3` | 54px | 500 | 145% | -0.02em | node |
| H4 | `h4` | 50px | 400 | 145% | -0.02em | node |
| H5 | `h5` | 43px | 400 | 145% | -0.02em | node |
| H6 | `h6` | 40px | 700 | 145% | -0.02em | node |
| H7 | `h7` | 37px | 600 | 145% | -0.02em | node |
| H8 | `h8` | 33px | 700 | 145% | -0.02em | node |
| H9 | `h9` | 30px | 600 | 145% | -0.02em | node |
| H10 | `h10` | 25px | 500 | 145% | -0.02em | node |
| H10 (300) | `h10-light` | 25px | 300 | 145% | -0.02em | node |
| H11 | `h11` | 21px | 500 | 145% | -0.02em | node |
| H12 | `h12` | 20px | 500 | 145% | -0.02em | node |

## 5. Spacing & Layout

### Base Unit
Values found: 4, 10, 14, 22, 23, 30, 224, 273

### Border Radius
| Token | Value | Usage Count |
|-------|-------|-------------|
| `radius-sm` | 2px | 4 |
| `radius-md` | 6px | 21 |
| `radius-lg-9` | 9px | 4 |
| `radius-lg-8` | 10px | 8 |
| `radius-lg-7` | 11px | 2 |
| `radius-lg-6` | 12px | 11 |
| `radius-lg-5` | 13px | 8 |
| `radius-lg-4` | 16px | 3 |
| `radius-lg-3` | 17px | 5 |
| `radius-lg-2` | 26px | 10 |
| `radius-lg` | 46px | 12 |

## 6. Depth & Motion

No shadow tokens detected. Design uses a flat style.

## 7. Components

No named components detected.

## 8. States

State tokens should be derived from the base palette above. Recommended mappings:

| State | Treatment |
|-------|-----------|
| Hover | Lighten/darken accent by 10% |
| Focus | 2px ring using accent color with 30% opacity |
| Disabled | 40% opacity, no pointer events |
| Error | Use danger color for border and text |

## 9. Rules

### Do
- Use `#ffffff` (`background`) as the page background
- Use `#000000` (`text-primary`) for primary text
- Use `#4665ab` (`accent`) as the primary accent color
- Keep border-radius consistent: 2px, 6px, 9px, 10px, 11px, 12px, 13px, 16px, 17px, 26px, 46px
- Use the spacing scale above for all padding and margins
- Maintain the type scale hierarchy for visual rhythm

### Don't
- Don't use colors outside the extracted palette
- Don't mix font families arbitrarily
- Don't use arbitrary spacing values outside the scale
- Don't flatten the shadow system to single-layer shadows

## 10. Extending this system

This file captures the visual language of one screen (or a small set). Most products grow from a landing page into a full app — auth, dashboard, settings, marketing pages, emails. Reuse this document as the canonical reference so new screens stay coherent.

### How to reuse this DESIGN.md
1. **Treat it as the source of truth.** Commit it at the repo root. Any new page or component should be built from the tokens above, not re-invented.
2. **Feed it to your AI coding tool.** Paste this file (or include it via `@DESIGN.md`) when prompting Copilot / Cursor / Claude to generate new pages. The model will reuse the exact tokens instead of inventing new ones.
3. **Re-run this plugin** whenever the Figma file changes substantially and diff the output. The diff itself is your design-system changelog.
4. **Promote tokens to code.** Mirror the palette, type scale, spacing, and radii into CSS variables, a Tailwind config, or a tokens file. Reference them by name in components — never hardcode hex/px values.

### Adding a new screen
- Start from the **Identity** statement above — the new screen must read as the same product.
- Pick layouts from existing **Structure** patterns (same containers, same gaps, same padding rhythm) before introducing new ones.
- Use only the existing spacing scale (4px, 10px, 14px, 22px, 23px, 30px, 224px, 273px). If you need a new value, add it here first so the next person knows it's allowed.
- Reuse the same **States** treatments (hover, focus, disabled, error). Consistency across screens is what makes states feel intentional.

### When to add a new token vs reuse
| Situation | Action |
|-----------|--------|
| Need a color that's a tint/shade of an existing one | Reuse + adjust opacity, don't add a new hex |
| Need a font size between two existing steps | Pick the closer existing step; resist filling the gap |
| Need a one-off spacing value | Round to the nearest scale value first |
| Need a genuinely new semantic role (e.g. `info`, `brand-2`) | Add it here with a clear role + confidence note |
| Need a new component pattern used 3+ times | Promote to the Components section |

### Page types likely to come next
If this design is a landing page, here are common follow-on surfaces and what to inherit:

| Surface | Inherit | Likely new tokens |
|---------|---------|-------------------|
| Auth (sign in / sign up) | Inputs, buttons, type scale, background | Form validation states, link color |
| Dashboard / app shell | Spacing, radii, shadows, nav patterns | Sidebar widths, data-density type step, table row heights |
| Settings | Inputs, buttons, type scale | Section dividers, toggle component, danger-zone treatment |
| Marketing / content pages | Identity, type scale, hero patterns | Long-form body width, blockquote, code block (if relevant) |
| Empty / error / 404 states | Type scale, illustration tone, CTA pattern | Illustration sizing tokens |
| Transactional emails | Color palette (with email-safe fallbacks), type scale | Email-safe font stack, fixed widths (600px) |

### Versioning
- Bump a header (`<!-- version: X.Y -->`) when the palette, type scale, or spacing scale changes — those are breaking.
- Non-breaking additions (a new component, a new shadow level) are minor.
- Keep this file in the same PR as the code change that introduces or consumes the new token, so design and code never drift.

## 11. Machine-readable tokens

The block below is the canonical token map. Reference this when generating code or syncing to CSS variables / Tailwind config. It mirrors the tables above but is unambiguous and parseable.

```json design-tokens
{
  "$schema": "design-tokens.v1",
  "meta": {
    "source": "Untitled",
    "generated": "2026-05-14"
  },
  "color": {
    "background": "#ffffff",
    "accent": "#4665ab",
    "border": "#908da5",
    "accent-alt": "#ff5d5d",
    "accent-3": "#677fb6",
    "text-tertiary": "#5c73a7",
    "text-primary": "#000000",
    "background-alt": "#eaf1ff",
    "accent-4": "#6a83bd",
    "accent-5": "#b4c2e1",
    "accent-6": "#c53939",
    "accent-7": "#dfa124",
    "surface": "#dde4f4",
    "accent-8": "#849bd1",
    "surface-alt": "#fce2e2",
    "accent-9": "#3b599e",
    "accent-10": "#2563eb",
    "accent-11": "#ff883e",
    "accent-12": "#b84040",
    "accent-13": "#b64a4a",
    "accent-14": "#bd6a6a",
    "accent-15": "#6884c7",
    "accent-16": "#d94144",
    "accent-17": "#b30000",
    "accent-18": "#ff0000",
    "accent-19": "#1fbe49",
    "accent-20": "#be1f1f",
    "accent-21": "#d9ac41",
    "accent-22": "#be0505",
    "accent-23": "#be991f",
    "accent-24": "#a0b7e1",
    "surface-3": "#f4dddd"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": 105,
      "fontWeight": 600,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h1": {
      "fontFamily": "Inter",
      "fontSize": 89,
      "fontWeight": 300,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h2": {
      "fontFamily": "Inter",
      "fontSize": 83,
      "fontWeight": 600,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h3": {
      "fontFamily": "Inter",
      "fontSize": 54,
      "fontWeight": 500,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h4": {
      "fontFamily": "Inter",
      "fontSize": 50,
      "fontWeight": 400,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h5": {
      "fontFamily": "Inria Sans",
      "fontSize": 43,
      "fontWeight": 400,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h6": {
      "fontFamily": "Inter",
      "fontSize": 40,
      "fontWeight": 700,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h7": {
      "fontFamily": "Inter",
      "fontSize": 37,
      "fontWeight": 600,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h8": {
      "fontFamily": "Inter",
      "fontSize": 33,
      "fontWeight": 700,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h9": {
      "fontFamily": "K2D",
      "fontSize": 30,
      "fontWeight": 600,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h10": {
      "fontFamily": "Inter",
      "fontSize": 25,
      "fontWeight": 500,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h10-light": {
      "fontFamily": "Inria Sans",
      "fontSize": 25,
      "fontWeight": 300,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h11": {
      "fontFamily": "Inter",
      "fontSize": 21,
      "fontWeight": 500,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h12": {
      "fontFamily": "Inter",
      "fontSize": 20,
      "fontWeight": 500,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h12-light": {
      "fontFamily": "Inter",
      "fontSize": 20,
      "fontWeight": 300,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "h13": {
      "fontFamily": "Inter",
      "fontSize": 19,
      "fontWeight": 500,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "body-lg-medium": {
      "fontFamily": "Inter",
      "fontSize": 18,
      "fontWeight": 500,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "body-lg-medium-2": {
      "fontFamily": "Inter",
      "fontSize": 17,
      "fontWeight": 500,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "body-sm-light": {
      "fontFamily": "Inter",
      "fontSize": 13,
      "fontWeight": 300,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    },
    "caption-medium": {
      "fontFamily": "Inter",
      "fontSize": 11,
      "fontWeight": 500,
      "lineHeight": "145%",
      "letterSpacing": "-0.02em"
    }
  },
  "spacing": {
    "space-4": 4,
    "space-10": 10,
    "space-14": 14,
    "space-22": 22,
    "space-23": 23,
    "space-30": 30,
    "space-224": 224,
    "space-273": 273
  },
  "radius": {
    "radius-md": 6,
    "radius-sm": 2,
    "radius-lg-9": 9,
    "radius-lg-8": 10,
    "radius-lg-7": 11,
    "radius-lg-6": 12,
    "radius-lg-5": 13,
    "radius-lg-4": 16,
    "radius-lg-3": 17,
    "radius-lg-2": 26,
    "radius-lg": 46
  },
  "shadow": {},
  "fonts": [
    "Inria Sans",
    "K2D",
    "Inter"
  ]
}
```
