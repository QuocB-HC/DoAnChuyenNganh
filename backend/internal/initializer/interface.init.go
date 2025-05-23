package initializer

import (
	"github.com/thanhoanganhtuan/go-ecommerce-backend-api/global"
	"github.com/thanhoanganhtuan/go-ecommerce-backend-api/internal/database"
	"github.com/thanhoanganhtuan/go-ecommerce-backend-api/internal/services"
	"github.com/thanhoanganhtuan/go-ecommerce-backend-api/internal/services/impl"
)

func InitInterface() {
	queries := database.New(global.Mysql)
	services.InitUserLogin(impl.NewUserLoginImpl(queries))
	services.InitAccommodation(impl.NewAccommodationImpl(queries))
	services.InitAccommodationDetail(impl.NewAccommodationDetailImpl(queries))
	services.InitManagerLogin(impl.NewManagerLoginImpl(queries))
	services.InitImage(impl.NewImageImpl(queries))
}
