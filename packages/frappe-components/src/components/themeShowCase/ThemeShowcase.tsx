import React, { useState } from "react";
import "./ThemeShowcase.css";

type ColorToken = {
  name: string;
  value: string;
};

type ColorCategory = {
  name: string;
  variants: ColorToken[];
};

type SemanticColorCategory = {
  name: string;
  colors: ColorToken[];
};

type FontSizeToken = {
  name: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string;
};

type SpacingToken = {
  name: string;
  value: string;
};

type ShadowToken = {
  name: string;
  value: string;
};

type RadiusToken = {
  name: string;
  value: string;
};

const ThemeShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("colors");

  const colorCategories: ColorCategory[] = [
    {
      name: "Gray",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `gray-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Blue",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `blue-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Green",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `green-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Red",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `red-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Orange",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `orange-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Yellow",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `yellow-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Teal",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `teal-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Violet",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `violet-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Cyan",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `cyan-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Amber",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `amber-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Pink",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `pink-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Purple",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `purple-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "White Overlay",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `white-overlay-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Black Overlay",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `black-overlay-${i === 0 ? "50" : i * 100}`,
      })),
    },
  ];

  const darkColorCategories: ColorCategory[] = [
    {
      name: "Dark Gray",
      variants: [
        { name: "50", value: "dark-gray-50" },
        { name: "100", value: "dark-gray-100" },
        { name: "200", value: "dark-gray-200" },
        { name: "250", value: "dark-gray-250" },
        { name: "300", value: "dark-gray-300" },
        { name: "400", value: "dark-gray-400" },
        { name: "500", value: "dark-gray-500" },
        { name: "600", value: "dark-gray-600" },
        { name: "650", value: "dark-gray-650" },
        { name: "700", value: "dark-gray-700" },
        { name: "800", value: "dark-gray-800" },
        { name: "900", value: "dark-gray-900" },
      ],
    },
    {
      name: "Dark Blue",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-blue-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Green",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-green-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Red",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-red-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Amber",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-amber-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Orange",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-orange-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Yellow",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-yellow-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Teal",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-teal-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Cyan",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-cyan-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Purple",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-purple-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Pink",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-pink-${i === 0 ? "50" : i * 100}`,
      })),
    },
    {
      name: "Dark Violet",
      variants: Array.from({ length: 10 }, (_, i) => ({
        name: i === 0 ? "50" : (i * 100).toString(),
        value: `dark-violet-${i === 0 ? "50" : i * 100}`,
      })),
    },
  ];

  const semanticColors: SemanticColorCategory[] = [
    {
      name: "Ink (Text)",
      colors: [
        { name: "ink-white", value: "ink-white" },
        { name: "ink-gray-1", value: "ink-gray-1" },
        { name: "ink-gray-2", value: "ink-gray-2" },
        { name: "ink-gray-3", value: "ink-gray-3" },
        { name: "ink-gray-4", value: "ink-gray-4" },
        { name: "ink-gray-5", value: "ink-gray-5" },
        { name: "ink-gray-6", value: "ink-gray-6" },
        { name: "ink-gray-7", value: "ink-gray-7" },
        { name: "ink-gray-8", value: "ink-gray-8" },
        { name: "ink-gray-9", value: "ink-gray-9" },
        { name: "ink-red-1", value: "ink-red-1" },
        { name: "ink-red-2", value: "ink-red-2" },
        { name: "ink-red-3", value: "ink-red-3" },
        { name: "ink-red-4", value: "ink-red-4" },
        { name: "ink-green-1", value: "ink-green-1" },
        { name: "ink-green-2", value: "ink-green-2" },
        { name: "ink-green-3", value: "ink-green-3" },
        { name: "ink-amber-1", value: "ink-amber-1" },
        { name: "ink-amber-2", value: "ink-amber-2" },
        { name: "ink-amber-3", value: "ink-amber-3" },
        { name: "ink-blue-1", value: "ink-blue-1" },
        { name: "ink-blue-2", value: "ink-blue-2" },
        { name: "ink-blue-3", value: "ink-blue-3" },
        { name: "ink-cyan-1", value: "ink-cyan-1" },
        { name: "ink-pink-1", value: "ink-pink-1" },
        { name: "ink-violet-1", value: "ink-violet-1" },
        { name: "ink-blue-link", value: "ink-blue-link" },
      ],
    },
    {
      name: "Surface (Background)",
      colors: [
        { name: "surface-white", value: "surface-white" },
        { name: "surface-gray-1", value: "surface-gray-1" },
        { name: "surface-gray-2", value: "surface-gray-2" },
        { name: "surface-gray-3", value: "surface-gray-3" },
        { name: "surface-gray-4", value: "surface-gray-4" },
        { name: "surface-gray-5", value: "surface-gray-5" },
        { name: "surface-gray-6", value: "surface-gray-6" },
        { name: "surface-gray-7", value: "surface-gray-7" },
        { name: "surface-red-1", value: "surface-red-1" },
        { name: "surface-red-2", value: "surface-red-2" },
        { name: "surface-red-3", value: "surface-red-3" },
        { name: "surface-red-4", value: "surface-red-4" },
        { name: "surface-red-5", value: "surface-red-5" },
        { name: "surface-red-6", value: "surface-red-6" },
        { name: "surface-red-7", value: "surface-red-7" },
        { name: "surface-green-1", value: "surface-green-1" },
        { name: "surface-green-2", value: "surface-green-2" },
        { name: "surface-green-3", value: "surface-green-3" },
        { name: "surface-amber-1", value: "surface-amber-1" },
        { name: "surface-amber-2", value: "surface-amber-2" },
        { name: "surface-amber-3", value: "surface-amber-3" },
        { name: "surface-blue-1", value: "surface-blue-1" },
        { name: "surface-blue-2", value: "surface-blue-2" },
        { name: "surface-blue-3", value: "surface-blue-3" },
        { name: "surface-orange-1", value: "surface-orange-1" },
        { name: "surface-violet-1", value: "surface-violet-1" },
        { name: "surface-cyan-1", value: "surface-cyan-1" },
        { name: "surface-pink-1", value: "surface-pink-1" },
        { name: "surface-menu-bar", value: "surface-menu-bar" },
        { name: "surface-cards", value: "surface-cards" },
        { name: "surface-modal", value: "surface-modal" },
        { name: "surface-selected", value: "surface-selected" },
      ],
    },
    {
      name: "Outline (Border)",
      colors: [
        { name: "outline-white", value: "outline-white" },
        { name: "outline-gray-1", value: "outline-gray-1" },
        { name: "outline-gray-2", value: "outline-gray-2" },
        { name: "outline-gray-3", value: "outline-gray-3" },
        { name: "outline-gray-4", value: "outline-gray-4" },
        { name: "outline-gray-5", value: "outline-gray-5" },
        { name: "outline-red-1", value: "outline-red-1" },
        { name: "outline-red-2", value: "outline-red-2" },
        { name: "outline-red-3", value: "outline-red-3" },
        { name: "outline-green-1", value: "outline-green-1" },
        { name: "outline-green-2", value: "outline-green-2" },
        { name: "outline-amber-1", value: "outline-amber-1" },
        { name: "outline-amber-2", value: "outline-amber-2" },
        { name: "outline-blue-1", value: "outline-blue-1" },
        { name: "outline-orange-1", value: "outline-orange-1" },
        { name: "outline-gray-modals", value: "outline-gray-modals" },
      ],
    },
  ];

  const fontSizes: FontSizeToken[] = [
    {
      name: "2xs",
      size: "var(--text-2xs-size)",
      lineHeight: "var(--text-2xs-line-height)",
      letterSpacing: "var(--text-2xs-letter-spacing)",
      fontWeight: "var(--text-2xs-font-weight)",
    },
    {
      name: "xs",
      size: "var(--text-xs-size)",
      lineHeight: "var(--text-xs-line-height)",
      letterSpacing: "var(--text-xs-letter-spacing)",
      fontWeight: "var(--text-xs-font-weight)",
    },
    {
      name: "sm",
      size: "var(--text-sm-size)",
      lineHeight: "var(--text-sm-line-height)",
      letterSpacing: "var(--text-sm-letter-spacing)",
      fontWeight: "var(--text-sm-font-weight)",
    },
    {
      name: "base",
      size: "var(--text-base-size)",
      lineHeight: "var(--text-base-line-height)",
      letterSpacing: "var(--text-base-letter-spacing)",
      fontWeight: "var(--text-base-font-weight)",
    },
    {
      name: "lg",
      size: "var(--text-lg-size)",
      lineHeight: "var(--text-lg-line-height)",
      letterSpacing: "var(--text-lg-letter-spacing)",
      fontWeight: "var(--text-lg-font-weight)",
    },
    {
      name: "xl",
      size: "var(--text-xl-size)",
      lineHeight: "var(--text-xl-line-height)",
      letterSpacing: "var(--text-xl-letter-spacing)",
      fontWeight: "var(--text-xl-font-weight)",
    },
    {
      name: "2xl",
      size: "var(--text-2xl-size)",
      lineHeight: "var(--text-2xl-line-height)",
      letterSpacing: "var(--text-2xl-letter-spacing)",
      fontWeight: "var(--text-2xl-font-weight)",
    },
    {
      name: "3xl",
      size: "var(--text-3xl-size)",
      lineHeight: "var(--text-3xl-line-height)",
      letterSpacing: "var(--text-3xl-letter-spacing)",
      fontWeight: "var(--text-3xl-font-weight)",
    },
  ];

  const paragraphFontSizes: FontSizeToken[] = [
    {
      name: "p-2xs",
      size: "var(--text-p-2xs-size)",
      lineHeight: "var(--text-p-2xs-line-height)",
      letterSpacing: "var(--text-p-2xs-letter-spacing)",
      fontWeight: "var(--text-p-2xs-font-weight)",
    },
    {
      name: "p-xs",
      size: "var(--text-p-xs-size)",
      lineHeight: "var(--text-p-xs-line-height)",
      letterSpacing: "var(--text-p-xs-letter-spacing)",
      fontWeight: "var(--text-p-xs-font-weight)",
    },
    {
      name: "p-sm",
      size: "var(--text-p-sm-size)",
      lineHeight: "var(--text-p-sm-line-height)",
      letterSpacing: "var(--text-p-sm-letter-spacing)",
      fontWeight: "var(--text-p-sm-font-weight)",
    },
    {
      name: "p-base",
      size: "var(--text-p-base-size)",
      lineHeight: "var(--text-p-base-line-height)",
      letterSpacing: "var(--text-p-base-letter-spacing)",
      fontWeight: "var(--text-p-base-font-weight)",
    },
    {
      name: "p-lg",
      size: "var(--text-p-lg-size)",
      lineHeight: "var(--text-p-lg-line-height)",
      letterSpacing: "var(--text-p-lg-letter-spacing)",
      fontWeight: "var(--text-p-lg-font-weight)",
    },
    {
      name: "p-xl",
      size: "var(--text-p-xl-size)",
      lineHeight: "var(--text-p-xl-line-height)",
      letterSpacing: "var(--text-p-xl-letter-spacing)",
      fontWeight: "var(--text-p-xl-font-weight)",
    },
    {
      name: "p-2xl",
      size: "var(--text-p-2xl-size)",
      lineHeight: "var(--text-p-2xl-line-height)",
      letterSpacing: "var(--text-p-2xl-letter-spacing)",
      fontWeight: "var(--text-p-2xl-font-weight)",
    },
    {
      name: "p-3xl",
      size: "var(--text-p-3xl-size)",
      lineHeight: "var(--text-p-3xl-line-height)",
      letterSpacing: "var(--text-p-3xl-letter-spacing)",
      fontWeight: "var(--text-p-3xl-font-weight)",
    },
  ];

  const spacingTokens: SpacingToken[] = [
    { name: "0", value: "0px" },
    { name: "px", value: "1px" },
    { name: "0.5", value: "0.125rem" },
    { name: "1", value: "0.25rem" },
    { name: "1.5", value: "0.375rem" },
    { name: "2", value: "0.5rem" },
    { name: "2.5", value: "0.625rem" },
    { name: "3", value: "0.75rem" },
    { name: "3.5", value: "0.875rem" },
    { name: "4", value: "1rem" },
    { name: "5", value: "1.25rem" },
    { name: "6", value: "1.5rem" },
    { name: "7", value: "1.75rem" },
    { name: "8", value: "2rem" },
    { name: "9", value: "2.25rem" },
    { name: "10", value: "2.5rem" },
    { name: "11", value: "2.75rem" },
    { name: "12", value: "3rem" },
    { name: "14", value: "3.5rem" },
    { name: "16", value: "4rem" },
    { name: "20", value: "5rem" },
    { name: "24", value: "6rem" },
    { name: "28", value: "7rem" },
    { name: "32", value: "8rem" },
    { name: "36", value: "9rem" },
    { name: "40", value: "10rem" },
    { name: "44", value: "11rem" },
    { name: "48", value: "12rem" },
    { name: "52", value: "13rem" },
    { name: "56", value: "14rem" },
    { name: "60", value: "15rem" },
    { name: "64", value: "16rem" },
    { name: "72", value: "18rem" },
    { name: "80", value: "20rem" },
    { name: "96", value: "24rem" },
    { name: "112", value: "28rem" },
  ];

  const shadowTokens: ShadowToken[] = [
    { name: "shadow-sm", value: "var(--shadow-sm)" },
    { name: "shadow", value: "var(--shadow-default)" },
    { name: "shadow-md", value: "var(--shadow-md)" },
    { name: "shadow-lg", value: "var(--shadow-lg)" },
    { name: "shadow-xl", value: "var(--shadow-xl)" },
    { name: "shadow-2xl", value: "var(--shadow-2xl)" },
    { name: "shadow-none", value: "var(--shadow-none)" },
  ];

  const radiusTokens: RadiusToken[] = [
    { name: "radius-none", value: "var(--radius-none)" },
    { name: "radius-sm", value: "var(--radius-sm)" },
    { name: "radius", value: "var(--radius-default)" },
    { name: "radius-md", value: "var(--radius-md)" },
    { name: "radius-lg", value: "var(--radius-lg)" },
    { name: "radius-xl", value: "var(--radius-xl)" },
    { name: "radius-2xl", value: "var(--radius-2xl)" },
    { name: "radius-full", value: "var(--radius-full)" },
  ];

  return (
    <div className={`theme-showcase`}>
      <header className="showcase-header">
        <h1>Design System - Theme Showcase</h1>
      </header>

      <div className="showcase-tabs">
        <button
          className={activeTab === "colors" ? "active" : ""}
          onClick={() => setActiveTab("colors")}
        >
          Colors
        </button>
        <button
          className={activeTab === "semantic-colors" ? "active" : ""}
          onClick={() => setActiveTab("semantic-colors")}
        >
          Semantic Colors
        </button>
        <button
          className={activeTab === "typography" ? "active" : ""}
          onClick={() => setActiveTab("typography")}
        >
          Typography
        </button>
        <button
          className={activeTab === "spacing" ? "active" : ""}
          onClick={() => setActiveTab("spacing")}
        >
          Spacing
        </button>
        <button
          className={activeTab === "shadows" ? "active" : ""}
          onClick={() => setActiveTab("shadows")}
        >
          Shadows
        </button>
        <button
          className={activeTab === "radius" ? "active" : ""}
          onClick={() => setActiveTab("radius")}
        >
          Border Radius
        </button>
      </div>

      <div className="showcase-content">
        {activeTab === "colors" && (
          <div className="color-grid">
            <h2>Base Colors</h2>
            <div className="color-swatches">
              <div className="color-swatch">
                <div
                  className="swatch"
                  style={{ backgroundColor: "var(--color-black)" }}
                ></div>
                <div className="swatch-info">
                  <span className="swatch-name">Black</span>
                  <span className="swatch-value">--color-black</span>
                </div>
              </div>
              <div className="color-swatch">
                <div
                  className="swatch"
                  style={{
                    backgroundColor: "var(--color-white)",
                    border: "1px solid var(--outline-gray-1)",
                  }}
                ></div>
                <div className="swatch-info">
                  <span className="swatch-name">White</span>
                  <span className="swatch-value">--color-white</span>
                </div>
              </div>
            </div>

            <h2>Color Scales</h2>
            {colorCategories.map((category) => (
              <div key={category.name} className="color-category">
                <h3>{category.name}</h3>
                <div className="color-scale">
                  {category.variants.map((variant) => (
                    <div key={variant.name} className="color-swatch">
                      <div
                        className="swatch"
                        style={{
                          backgroundColor: `var(--color-${variant.value})`,
                          border: "1px solid var(--outline-gray-1)",
                        }}
                      ></div>
                      <div className="swatch-info">
                        <span className="swatch-name">{variant.name}</span>
                        <span className="swatch-value">
                          --color-{variant.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <h2>Dark Mode Colors</h2>
            {darkColorCategories.map((category) => (
              <div key={category.name} className="color-category">
                <h3>{category.name}</h3>
                <div className="color-scale">
                  {category.variants.map((variant) => (
                    <div key={variant.name} className="color-swatch">
                      <div
                        className="swatch"
                        style={{
                          backgroundColor: `var(--color-${variant.value})`,
                          border: "1px solid var(--outline-gray-1)",
                        }}
                      ></div>
                      <div className="swatch-info">
                        <span className="swatch-name">{variant.name}</span>
                        <span className="swatch-value">
                          --color-{variant.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "semantic-colors" && (
          <div className="semantic-colors">
            <h2>Semantic Colors</h2>
            {semanticColors.map((category) => (
              <div key={category.name} className="semantic-color-category">
                <h3>{category.name}</h3>
                <div className="semantic-color-grid">
                  {category.colors.map((color) => (
                    <div key={color.name} className="semantic-color-swatch">
                      <div
                        className="swatch"
                        style={{
                          backgroundColor: `var(--${color.value})`,
                          border: "1px solid var(--outline-gray-1)",
                        }}
                      ></div>
                      <div className="swatch-info">
                        <span className="swatch-name">{color.name}</span>
                        <span className="swatch-value">--{color.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "typography" && (
          <div className="typography">
            <h2>Font Sizes</h2>
            <div className="typography-section">
              <h3>Headings</h3>
              {fontSizes.map((fontSize) => (
                <div key={fontSize.name} className="font-size-item">
                  <div
                    className="font-size-example"
                    style={{
                      fontSize: fontSize.size,
                      lineHeight: fontSize.lineHeight,
                      letterSpacing: fontSize.letterSpacing,
                      fontWeight: fontSize.fontWeight,
                    }}
                  >
                    Aa The quick brown fox jumps over the lazy dog
                  </div>
                  <div className="font-size-details">
                    <span className="font-size-name">text-{fontSize.name}</span>
                    <span className="font-size-values">
                      {fontSize.size} / {fontSize.lineHeight} /{" "}
                      {fontSize.letterSpacing} / {fontSize.fontWeight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="typography-section">
              <h3>Paragraph</h3>
              {paragraphFontSizes.map((fontSize) => (
                <div key={fontSize.name} className="font-size-item">
                  <div
                    className="font-size-example"
                    style={{
                      fontSize: fontSize.size,
                      lineHeight: fontSize.lineHeight,
                      letterSpacing: fontSize.letterSpacing,
                      fontWeight: fontSize.fontWeight,
                    }}
                  >
                    <p>
                      The quick brown fox jumps over the lazy dog. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="font-size-details">
                    <span className="font-size-name">text-{fontSize.name}</span>
                    <span className="font-size-values">
                      {fontSize.size} / {fontSize.lineHeight} /{" "}
                      {fontSize.letterSpacing} / {fontSize.fontWeight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "spacing" && (
          <div className="spacing">
            <h2>Spacing</h2>
            <div className="spacing-grid">
              {spacingTokens.map((token) => (
                <div key={token.name} className="spacing-item">
                  <div className="spacing-visual">
                    <div
                      className="spacing-box"
                      style={{ width: token.value, height: token.value }}
                    ></div>
                  </div>
                  <div className="spacing-info">
                    <span className="spacing-name">spacing-{token.name}</span>
                    <span className="spacing-value">{token.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "shadows" && (
          <div className="shadows">
            <h2>Box Shadows</h2>
            <div className="shadows-grid">
              {shadowTokens.map((token) => (
                <div key={token.name} className="shadow-item">
                  <div
                    className="shadow-example"
                    style={{ boxShadow: token.value }}
                  ></div>
                  <div className="shadow-info">
                    <span className="shadow-name">{token.name}</span>
                    <span className="shadow-value">{token.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "radius" && (
          <div className="radius">
            <h2>Border Radius</h2>
            <div className="radius-grid">
              {radiusTokens.map((token) => (
                <div key={token.name} className="radius-item">
                  <div
                    className="radius-example"
                    style={{ borderRadius: token.value }}
                  ></div>
                  <div className="radius-info">
                    <span className="radius-name">{token.name}</span>
                    <span className="radius-value">{token.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeShowcase;
