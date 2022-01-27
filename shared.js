// define custom component

class CButton extends HTMLElement {
    constructor() {
        super();
        this.size = 'default';
    }

    connectedCallback() {
        this.classList.add("cButton");

        // type = 'primary' | 'text' | 'active' | 'inactive'
        this.type = this.getAttribute("type");
        this.classList.add(`c-button-${this.type}`);

        // size = 'default' | 'large'
        this.size = this.getAttribute("size") ?? 'default';
        this.classList.add(`c-button-size-${this.size}`);
        this.render()
    }

    render() {
        // this.innerHTML = `
        // <div>
        //   <span>${this.children}</span>
        // </div>
        // `;
    }
}

customElements.define("c-button", CButton);


class CStatCard extends HTMLElement {
    constructor() {
        super();
        this.renderVal = '';
        this.increase = `<img style="margin-right: 8px" src="src/assets/images/increase.svg">`;
        this.decrease = `<img style="margin-right: 8px" src="src/assets/images/decrease.svg">`;
        this.subValueClass = '';
        this.renderTooltip = '';
    }

    connectedCallback() {
        this.cardTitle = this.getAttribute("cardTitle");
        this.statCount = this.getAttribute("statCount");
        this.statUnit = this.getAttribute("statUnit");
        this.change = this.getAttribute("change");
        this.subValue = this.getAttribute("subValue");
        this.tooltipTitle = this.getAttribute("tooltipTitle");
        if (this.change === 'increase') {
            this.renderVal = this.increase;
            this.subValueClass = 'c-stat-sub-value-increase';
        }
        if (this.change === 'decrease') {
            this.renderVal = this.decrease;
            this.subValueClass = 'c-stat-sub-value-decrease';
        }

        if (this.tooltipTitle) {
            this.renderTooltip = `<c-info-tooltip tooltipTitle="${this.tooltipTitle}"></c-info-tooltip>`
        }

        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="c-stat-card-wrapper">
          <span class="title">${this.cardTitle}</span>
          <div class="c-stat ${this.change === 'increase' || this.change === 'decrease' ? 'item-center' : 'item-base-line'}">
            <div>
                <span class="c-stat-count">${this.statCount}</span>
                <span class="c-stat-unit">${this.statUnit}</span>
            </div>
            <div class="c-stat-value">
                ${this.renderVal}
                <span class="c-stat-sub-value ${this.subValueClass}">
                    ${this.subValue}${this.change === 'increase' || this.change === 'decrease' ? '%' : ''}
                </span>
                ${this.renderTooltip}
            </div>
          </div>
        </div>
        `;
    }
}

customElements.define("c-stat-card", CStatCard);

class CInfoTooltip extends HTMLElement {
    constructor() {
        super();
        this.tooltipTitle = '';
        this.responsiveOffset = 12;
        // 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'right'
        this.position = 'top';
    }

    connectedCallback() {
        this.tooltipTitle = this.getAttribute("tooltipTitle");
        this.addEventListener("mouseover", () => {
            const pos = this.getResponsivePos();
            this.firstElementChild.firstElementChild.style.transform = this.getTranslateFromPos(pos);
        })
        this.render();
    }

    getResponsivePos() {
        const { width, height, } = this.firstElementChild.firstElementChild.getBoundingClientRect();
        const rect = this.getBoundingClientRect();
        const center = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
        const left = center.x - width / 2;
        const right = center.x + width / 2;
        const top = center.y - height / 2;
        const bottom = center.y + height / 2;
        const { innerWidth, innerHeight } = window;

        let collideRight = right + this.responsiveOffset > innerWidth;
        let collideLeft = left - this.responsiveOffset < 0;
        let collideTop = top - this.responsiveOffset < 0;
        let collideBottom = bottom + this.responsiveOffset > innerHeight;

        if (collideRight) {
            if (collideTop) return 'bottomLeft';
            if (collideBottom) return 'topLeft';
            return 'left';
        }
        if (collideLeft) {
            if (collideTop) return 'bottomRight';
            if (collideBottom) return 'topRight';
            return 'right';
        }
        if (collideTop) {
            if (!collideRight && !collideLeft) return 'bottom';
        }
        if (collideBottom) {
            if (!collideRight && !collideLeft) return 'top';
        }
        return this.position;
    }

    getTranslateFromPos(pos) {
        switch (pos) {
            case 'top':
                return `translate(-50%, -100%) translateY(-12px)`;
            case 'bottom':
                return `translate(-50%, 100%) translateY(12px)`;
            case 'left':
                return `translate(-100%, 0%) translateX(-12px)`;
            case 'right':
                return `translate(100%, 0%) translateX(12px)`;
            case 'topLeft':
                return `translate(-100%, -100%) translateX(32px) translateY(-12px)`;
            case 'topRight':
                return `translate(100%, -100%) translateX(-32px) translateY(-12px)`;
            case 'bottomLeft':
                return `translate(-100%, 0%) translateX(32px) translateY(-12px)`;
            case 'bottomRight':
                return `translate(100%, 0%) translateX(32px) translateY(-12px)`;
        }
    }

    render() {
        this.innerHTML = `
        <div class="tooltip-wrap">
            <div class="tooltip-float">${this.tooltipTitle}</div>
            <img src="src/assets/images/question.svg">
        </div>
        `;
    }
}

customElements.define("c-info-tooltip", CInfoTooltip);