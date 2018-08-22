using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Edu.DAL.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Humans",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    DateOfBirth = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Humans", x => x.ID);
                });

            migrationBuilder.InsertData(
                table: "Humans",
                columns: new[] { "ID", "DateOfBirth", "Name" },
                values: new object[] { 1, new DateTime(1999, 6, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Some Dude" });

            migrationBuilder.InsertData(
                table: "Humans",
                columns: new[] { "ID", "DateOfBirth", "Name" },
                values: new object[] { 2, new DateTime(2018, 8, 22, 15, 25, 59, 628, DateTimeKind.Local), "Another Dude" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Humans");
        }
    }
}
